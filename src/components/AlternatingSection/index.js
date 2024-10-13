const sections = [
  { 
    image: '/img/main/solaire.jpeg',
    title: "Une énérgie verte",
    text: 
    <> 
      Une bref description, blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla
      blabla blablablablablablablablablablablablablablablablablablablablablablablablablablablabla
    </>
  },
  { 
    image: 'image2.jpg', 
    text: 'Deuxième section' 
  },
  { 
    image: 'image3.jpg', 
    text: 'Troisième section' 
  },
];

const AlternatingSection = ({ image, title, text, flip }) => {
  return (
    <div className={`alternating-section ${flip ? 'flipped' : ''}`}>
      <div className="image-container">
        <img src={image} alt="illustration" />
      </div>
      <div className="text-container">
        <h2 className="title-container">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

const MainContent = () => {

  return (
    <div>
      {sections.map((section, index) => (
        <AlternatingSection
          key={index}
          image={section.image}
          title={section.title}
          text={section.text}
          flip={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default MainContent;
