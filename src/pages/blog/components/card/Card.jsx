import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <Link to="/blog/id">
    <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <img class="w-full" src="https://www.istockphoto.com/photo/digital-human-head-concept-for-ai-metaverse-and-facial-recognition-technology-gm2149530993-570752953?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&utm_medium=affiliate&utm_source=unsplash&utm_term=image%3A%3A%3A" alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  </Link>
  )
}

export default Card
