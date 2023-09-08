import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Ah. 500 Dahili Sunucu Hatası var gibi görünüyor. Lütfen daha sonra tekrar deneyiniz!"} />
}

export default UnkownPage;
