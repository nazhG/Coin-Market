export default function getLoginToken() : string | null  {
    return localStorage.getItem('jwtLoginToken')
}