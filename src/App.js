

const App = () => {

  const categories = [
    {
      is: 1,
      title: "Hats",
    },
    {
      is: 2,
      title: "Jackets",
    },
    {
      is: 3,
      title: "Sneakers",
    },
    {
      is: 4,
      title: "Womens",
    },
    {
      is: 5,
      title: "Mens",
    },
  ];

  return (
    <div className='categories-container'>
      {categories.map(({ title }) => (
        <div className='category-container'>
          {/* <img /> */}
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}


    </div>
  );
};

export default App;
