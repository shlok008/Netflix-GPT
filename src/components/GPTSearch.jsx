import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptSuggestion from './GptSuggestion';
import { Background_Url } from '../utils/constants';

const GptSearch = () => {
  return (
		<div>
			<div className="fixed inset-0  -z-50">
				<img
					src={Background_Url}
					alt="Background"
					className="w-full h-full object-cover opacity-50"
				/>
			</div>
			<div className='pt-56'>
				<GptSearchBar />
				<GptSuggestion />
			</div>
		</div>
  );
}

export default GptSearch; 