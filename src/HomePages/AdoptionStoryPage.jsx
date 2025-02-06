import React from 'react';

const AdoptionStoryPage = () => {
  const familyStory = {
    imageUrl: 'https://img.freepik.com/free-photo/family-with-daughter-autumn-park_1157-22516.jpg?t=st=1738382214~exp=1738385814~hmac=c7b01c5f9827070509d1a8260030792782f607dc00744290e4b7863c32549e99&w=996', // Replace with your family image URL
    childImage: 'https://img.freepik.com/free-photo/joy-room-brunette-leisure-father_1157-3490.jpg?t=st=1738382264~exp=1738385864~hmac=05a007832e94ab66ec57f52ad021c913a833cd360b90f445153a712749a8af45&w=996', // Replace with your child image URL
    familyName: 'The Johnsons',
    story: 'We are so happy to welcome little Emma into our family. It has been a life-changing experience, and we couldn’t be more grateful for this journey of adoption. We want to share our story to inspire others who might be considering adoption!',
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="banner" style={{ textAlign: 'center', backgroundColor: '#f5f5f5', padding: '50px 0' }}>
        <h1>Welcome to Our Adoption Journey</h1>
        <p>Learn about the transformative experience of adoption and how it can change lives.</p>
        {/* Add any banner content here */}
      </div>

      {/* Adoption Story Section */}
      <div className="adoption-story" style={{ textAlign: 'center', margin: '40px 0' }}>
        <h2>{familyStory.familyName}'s Adoption Story</h2>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img
            src={familyStory.imageUrl}
            alt="Family"
            style={{ width: '300px', height: 'auto', borderRadius: '8px', marginRight: '20px' }}
          />
          <img
            src={familyStory.childImage}
            alt="Child"
            style={{ width: '300px', height: 'auto', borderRadius: '8px' }}
          />
        </div>
        <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
          {familyStory.story}
        </p>
      </div>
    </div>
  );
};

export default AdoptionStoryPage;
