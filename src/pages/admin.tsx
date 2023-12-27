
import { GlobalProvider } from "@/context/admin";
import { Main } from "@/comps/admin/main";

export default function Admin() {
  return (
    <>
      <GlobalProvider>
        <Main />
      </GlobalProvider>
    </>
  );
}
