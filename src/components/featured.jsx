import React from 'react'
import feat from '../../public/feat.png'
import feat3 from '../../public/feat3.png'

const FeaturedSection = () => {

    const data = [
        {
          id: 1,
          imageUrl: feat3,
          title: 'Future of Web Development in 2024',
          description: 'As we step into 2024, the landscape of web development continues to evolve at a rapid pace, driven by technological advancements, changing user expectations, and emerging trends. In this blog, we will explore what the future holds for web development in 2024 and beyond.',
        },
      ];

    //   const ImageBox = ({ imageUrl, title, description }) => (
    //     <div className="image-container relative rounded-lg overflow-hidden flex justify-center content-center">
    //       <img src={imageUrl} alt={title} className="w-scree w-2/3 h-auto rounded-lg" />
    //       <div className="text-box absolute bg-white bottom-0 left-4/12 w-4/12 p-4 rounded-lg shadow-md">
    //         <h2 className="text-lg font-semibold">{title}</h2>
    //         <p className="text-sm mt-2">{description}</p>
    //       </div>
    //     </div>
    //   );

  return (
    <div className="mt-6 relative height-auto">
    <div className='flex justify-center content-center text-4xl font-extrabold mb-6'>Featured Blog</div>
    <div className="container">
      {data.map(item => (
        <div key={item.id} className="image-container rounded-xl overflow-hidden flex justify-center content-center">
          <img src={item.imageUrl} alt={item.title} className="w-2/3 h-auto rounded-lg" />
          <div className="text-box absolute bg-white bottom-4 left-4/12 w-4/12 p-4 rounded-xl shadow-md transition duration-300 ease-in-out">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm mt-2 overflow-hidden" style={{ maxHeight: '3em', textOverflow: 'ellipsis', whiteSpace: 'normal', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    <style>
      {`
        .image-container:hover .text-box {
          background-color: #f0f0f0; /* Change background color on hover */
          transform: translateY(-10px); /* Move the text box up on hover */
        }
      `}
    </style>
  </div>
  
  )
}

export default FeaturedSection