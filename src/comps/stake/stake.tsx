import { notify, notifyError } from '@/hooks/useNotify';
import stakeStyle from '@/styles/Stake.module.css';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { FaAngleDown, FaAngleUp, FaQrcode } from 'react-icons/fa6';
import { GlobalContext } from '@/context/';
import LoginModal from '../login/LoginModal';
import { useAccount } from 'wagmi';
import Modal from '../utils/modal';
import QR from '../utils/QR';
import { fetchData } from '@/hooks/fetchData';
import getLoginToken from '../utils/getLoginToken';
import Loader from '../utils/loader';

export const Stake = () => {
  const btn =
    'bg-yellow-500 border border-gray-950 text-blue-950 font-extrabold rounded-lg italic text-2xl flex items-center justify-center transition-all ease-in-out duration-300 transform cursor-pointer hover:text-[1.6rem]';
  const stakeInfoClass =
    'bg-gray-800 rounded-3xl flex flex-col items-center text-center mt-[75px] h-fit transition-transform transform hover:-translate-y-2 ease-in-out duration-300 cursor-pointer relative';

  interface Tier {
    days: number;
    minAmount: number;
    roi: number;
    color: string;
  }

  interface Stake {
    amount: number;
    profit: number | null;
    status: 'pending' | 'active' | 'finished';
    needBid: boolean;
  }

  const tiers: Array<Tier> = [
    {
      days: 120,
      minAmount: 50,
      roi: 1,
      color: 'blue-900'
    },
    {
      days: 150,
      minAmount: 150,
      roi: 1.1,
      color: 'yellow-500'
    },
    {
      days: 180,
      minAmount: 500,
      roi: 1.4,
      color: 'green-700'
    }
  ];

  const _loginMsg = (amount: number, days: number, roi: number) => {
    return (
      <p className="text-lg">
        Registrate para continuar tu proceso de inversión en Staking {days} Days
        by
        {amount} USDT, con ROI diario del {roi}%
      </p>
    );
  };

  const { userName } = useContext(GlobalContext);

  // Tier selected
  const [selected, setSelected] = useState(0);
  const [amount, setAmount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [loginMsg, setLoginMsg] = useState(<></>);
  const [stakes, setStake] = useState<Array<Stake | null>>(
    Array(tiers.length).fill(null)
  );
  const [showQr, setShowQr] = useState(false);
  const [loading, setLoading] = useState(false);

  const stakeInfo = (
    { days, roi, minAmount, color }: Tier,
    tierNumber: number,
    invest: number = 0,
    profit: number = 0,
    shouldPush: boolean = false,
    stakeStatus: 'pending' | 'active' | 'finished' = 'pending'
  ) => {
    return (
      <>
        {invest > 0 && shouldPush && (
          <div className="rounded-3xl absolute w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
            <button className={`${btn} px-3 py-1`} onClick={() => handleBid}>
              PUJAR STAKING
            </button>
          </div>
        )}
        <Image
          src="/ISOTIPO_PARA_FONDO_OSCURO.png"
          alt="Coin logo"
          width="120"
          height="120"
          className="w-[6rem] h-[6rem] mt-[-3rem] mb-4 z-10"
        />
        <p className="text-3xl font-bold italic mb-10">
          STAKING
          <br />
          for {days} days
        </p>
        <p
          className={`italic border-b-[0.8rem] w-[95%] text-[2rem] font-bold leading-7 border-${color} mb-6`}
        >
          ROI DAILY {roi}%
        </p>
        <p className="text-3xl font-bold italic mb-10">
          Stake from ${minAmount}
        </p>
        {Number(invest) > 0 && (
          <div
            className={`border-t-2 ${
              stakeStatus === 'pending'
                ? 'border-gray-400 text-gray-400'
                : 'border-yellow-200 text-yellow-200'
            } border-dotted text-left w-full py-3 font-bold`}
          >
            <p className="px-4">Your invest: ${invest}</p>
            <p className="px-4">Your profit: ${profit}</p>
            {stakeStatus === 'pending' && (
              <div className="text-gray-300 text-xs flex justify-evenly items-center">
                <span
                  className="cursor-pointer hover:text-blue-500 transition duration-300"
                  onClick={() => setShowQr(true)}
                >
                  <FaQrcode />
                </span>
                &nbsp;|&nbsp;
                <span
                  className="cursor-pointer hover:text-blue-500 transition duration-300"
                  onClick={() => checkPayment(tierNumber)}
                >
                  {loading ? (
                    <Loader className="text-xs" />
                  ) : (
                    'check payment 🔴'
                  )}
                </span>
              </div>
            )}
          </div>
        )}
      </>
    );
  };

  const { loginToken, logOut } = useContext(GlobalContext);

  const handleStake = () => {
    if (amount < tiers[selected].minAmount) {
      notifyError('El monto mínimo es de $' + tiers[selected].minAmount);
      return;
    }
    // TODO stake con cuenta
    if (!loginToken) {
      setLoginMsg(_loginMsg(amount, tiers[selected].days, tiers[selected].roi));
      setShowLogin(true);
      return;
    }
    fetchData(
      'stake/create',
      {
        username: userName,
        amount: amount,
        tier: selected
      },
      loginToken,
      logOut
    )
      .then((res) => {
        if (res.error) return;
        notify(res.message || 'Stake creado correctamente');
        const { stake } = res;
        let newStakes = [...stakes];
        newStakes[res.stake.tier] = {
          amount: stake.amount,
          profit: stake.profit ?? 0,
          status: stake.status,
          needBid: false // TODO
        };
        setStake(newStakes);
        setShowQr(true);
      })
      .catch((err) => {
        notifyError(err.message || 'Intenta de nuevo más tarde');
      });
  };

  const handleReinvest = () => {
    notifyError('No tienes Stake iniciado');
    console.log('Reinvest');
  };

  const handleWithdraw = () => {
    notifyError('No tienes Stake iniciado');
    console.log('Withdraw');
  };

  const handleUnstake = () => {
    notifyError('No tienes Stake iniciado');
    console.log('Unstake');
  };

  const handleBid = () => {
    notifyError('No tienes Stake iniciado');
    console.log('Bid');
  };

  const changeTier = (tier: number) => {
    if (tier < 0 || tier > tiers.length - 1) return;
    setSelected(tier);
  };

  const checkPayment = (tierNumber: number) => {
    if (loading) return;
    const _loginToken = getLoginToken();
    if (!_loginToken) return;
    const username = localStorage.getItem('username');
    setLoading(true);
    fetchData(
      'checkpayment',
      {
        username,
        payType: `stake-${tierNumber}`
      },
      _loginToken,
      logOut
    )
      .then((data) => {
        if (data.error) {
          notifyError('El pago no ha sido confirmado');
          return;
        }
        console.log('checkpayment data', data);
        updateStake();
        notify('Pago confirmado');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateStake = () => {
    const _loginToken = getLoginToken();
    if (!_loginToken) return;
    const username = localStorage.getItem('username');
    fetchData(
      'stake/get',
      {
        username
      },
      _loginToken,
      logOut
    ).then((data) => {
      if (data.error) return;
      console.log('data', data);
      setStake(data.stake ?? [null, null, null]);
    });
  };

  useEffect(
    () => {
      updateStake();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const pendingStakeAmount = () => {
    let amount = 0;
    stakes.forEach((stake) => {
      if (stake?.status === 'pending') amount += stake.amount;
    });
    return amount;
  };

  return (
    <>
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        msg={loginMsg}
      />
      {showQr && (
        <Modal isOpen={showQr} onClose={() => setShowQr(false)}>
          <QR username={userName ?? ''} amount={BigInt(pendingStakeAmount())} />
        </Modal>
      )}
      <div className={`${stakeStyle.layout}`}>
        <div className={`${stakeStyle.titulo} text-center mb-3`}>
          <h1 className="font-black italic leading-tight text-3xl">STAKING</h1>
          <h2 className="italic leading-tight text-3xl">
            Profit staking in market
          </h2>
        </div>
        <div
          className={`${stakeStyle.stake1} ${stakeInfoClass} ${
            selected === 0 ? `border border-gray-400` : ``
          }`}
          onClick={() => setSelected(0)}
        >
          {stakeInfo(
            { ...tiers[0] },
            0,
            stakes[0]?.amount,
            stakes[0]?.profit ?? 0,
            stakes[0]?.needBid,
            stakes[0]?.status
          )}
        </div>
        <div
          className={`${stakeStyle.stake2} ${stakeInfoClass} ${
            selected === 1 ? `border border-gray-400` : ``
          }`}
          onClick={() => setSelected(1)}
        >
          {stakeInfo(
            { ...tiers[1] },
            1,
            stakes[1]?.amount,
            stakes[1]?.profit ?? 0,
            stakes[1]?.needBid,
            stakes[1]?.status
          )}
        </div>
        <div
          className={`${stakeStyle.stake3} ${stakeInfoClass} ${
            selected === 2 ? `border border-gray-400` : ``
          }`}
          onClick={() => setSelected(2)}
        >
          {stakeInfo(
            { ...tiers[2] },
            2,
            stakes[2]?.amount,
            stakes[2]?.profit ?? 0,
            stakes[2]?.needBid,
            stakes[2]?.status
          )}
        </div>
        <div
          className={`${stakeStyle.select} flex items-center rounded-xl border-2 border-yellow-500 px-3 text-lg gap-2 bg-gray-700 bg-opacity-50`}
        >
          <span className="text-yellow-500 font-semibold italic">Select</span>
          <div className="flex flex-col">
            <FaAngleUp
              className={
                selected === tiers.length - 1
                  ? `text-gray-500`
                  : `text-yellow-500 cursor-pointer transition-all ease-in-out duration-300 transform hover:scale-125`
              }
              onClick={() => {
                changeTier(selected + 1);
              }}
            />
            <FaAngleDown
              className={
                selected === 0
                  ? `text-gray-500`
                  : `text-yellow-500 cursor-pointer transition-all ease-in-out duration-300 transform hover:scale-125`
              }
              onClick={() => {
                changeTier(selected - 1);
              }}
            />
          </div>
          <span>
            Staking to {tiers[selected].days} Days Roi {tiers[selected].roi}% :
          </span>
          <input
            type="number"
            className={`flex-grow italic ${
              amount >= tiers[selected].minAmount || !amount
                ? `text-green-200`
                : `text-red-500`
            }`}
            placeholder="Ingrese cantidad en USDT a invertir"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleStake();
              }
            }}
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
          />
        </div>
        <div className={`${stakeStyle.iniciar} ${btn}`} onClick={handleStake}>
          INICIAR STAKING
        </div>
        <div
          className={`${stakeStyle.reinvest} ${btn}`}
          onClick={handleReinvest}
        >
          REINVEST
        </div>
        <div
          className={`${stakeStyle.withdraw} ${btn}`}
          onClick={handleWithdraw}
        >
          WITHDRAW
        </div>
        <div className={`${stakeStyle.unstake} ${btn}`} onClick={handleUnstake}>
          UNSTAKE
        </div>
      </div>
    </>
  );
};
