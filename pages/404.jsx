import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Dostum galiba yolunu kaybettin.',
        'burası çıkmaz yol.'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "sayfa bulunamadı."} />
}

export default UnkownPage;

