import "./financialAdvice.css";

const image1 =
  "https://assets2.rockpapershotgun.com/apex-legends_C7972ZW.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/apex-legends_C7972ZW.jpg";

const FinancialAdviceCard = () => {
  return (
    <div className='card-container bg-zinc-900 rounded-2xl shadow-2xl '>
      <div className='flex items-center justify-between'>
        <h1 className='title mt-2'>Financial Advice</h1>
      </div>
      <div className=' mt-5'>
        <div className='flex items-center justify-between'>
          <div className='mb-10 text-gray-400 mt-3 '>
            Try dey enjoy life. <br />
            Problem no dey finish.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialAdviceCard;
