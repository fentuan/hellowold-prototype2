import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Volume2 } from 'lucide-react'

interface Example {
  en: string
  zh: string
}

interface Synonym {
  en: string
  zh: string
}

interface WordData {
  word: string
  meaning: string
  phonetic: string
  examples: Example[]
  synonyms: Synonym[]
  image: string
}

const WordDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [pronunciationType, setPronunciationType] = React.useState<'us' | 'uk'>('us')

  // Mock word data based on id
  const wordData: Record<string, WordData> = {
    '1': {
      word: 'cat',
      meaning: '猫',
      phonetic: '/kæt/',
      examples: [
        { en: 'I have a cat.', zh: '我有一只猫。' },
        { en: 'The cat is sleeping.', zh: '猫在睡觉。' },
      ],
      synonyms: [
        { en: 'feline', zh: '猫科动物' },
        { en: 'kitty', zh: '小猫' },
      ],
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cat%20cartoon%20style&image_size=square_hd',
    },
    '2': {
      word: 'dog',
      meaning: '狗',
      phonetic: '/dɒɡ/',
      examples: [
        { en: 'The dog is barking.', zh: '狗在叫。' },
        { en: 'Dogs are loyal animals.', zh: '狗是忠诚的动物。' },
      ],
      synonyms: [
        { en: 'canine', zh: '犬科动物' },
        { en: 'puppy', zh: '小狗' },
      ],
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20dog%20cartoon%20style&image_size=square_hd',
    },
    '3': {
      word: 'apple',
      meaning: '苹果',
      phonetic: '/ˈæpl/',
      examples: [
        { en: 'I ate an apple.', zh: '我吃了一个苹果。' },
        { en: 'Apples are good for you.', zh: '苹果对你有好处。' },
      ],
      synonyms: [
        { en: 'fruit', zh: '水果' },
        { en: 'Malus', zh: '苹果属' },
      ],
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=red%20apple%20cartoon%20style&image_size=square_hd',
    },
  }

  const word = wordData[id || '1']

  const handleBackClick = () => {
    navigate('/learning')
  }

  const handlePlayPronunciation = () => {
    // In a real app, this would play the pronunciation
    console.log('Playing pronunciation for', word.word)
  }

  const handlePronunciationTypeChange = (type: 'us' | 'uk') => {
    setPronunciationType(type)
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="w-[320px] h-[320px] mx-auto my-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-3 flex items-center justify-between text-white">
          <button
            className="p-2 rounded-full hover:bg-white/20 active:scale-95"
            onClick={handleBackClick}
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-base font-bold">词条详情</h1>
          <div className="w-8"></div> {/* Spacer */}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto transition-all duration-300">
          {/* Image Area */}
          <div className="bg-green-50 p-6 flex flex-col items-center">
            <img
              src={word.image}
              alt={word.word}
              className="w-32 h-32 object-contain mb-4"
            />
            <h2 className="text-lg font-bold">{word.word}</h2>
          </div>

          {/* Pronunciation Area */}
          <div className="p-4 bg-white border-b border-gray-100">
            <div className="text-sm font-medium mb-3">发音</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center active:scale-95 text-white"
                  onClick={handlePlayPronunciation}
                >
                  <Volume2 size={28} />
                </button>
                <span className="ml-3 text-sm">{word.phonetic}</span>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex space-x-2 mb-2">
                  <button 
                    className={`px-4 py-1 rounded text-sm active:scale-95 ${
                      pronunciationType === 'us' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => handlePronunciationTypeChange('us')}
                  >
                    美音
                  </button>
                  <button 
                    className={`px-4 py-1 rounded text-sm active:scale-95 ${
                      pronunciationType === 'uk' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => handlePronunciationTypeChange('uk')}
                  >
                    英音
                  </button>
                </div>
                <button className="px-4 py-1 bg-blue-500 text-white rounded text-sm active:scale-95">
                  慢读
                </button>
              </div>
            </div>
          </div>

          {/* Meaning Area */}
          <div className="p-4 bg-green-50">
            <h3 className="text-sm font-bold mb-2">释义</h3>
            <div className="text-sm font-bold">{word.meaning}</div>
          </div>

          {/* Examples Area */}
          <div className="p-4 bg-white shadow-sm">
            <h3 className="text-sm font-bold mb-2">例句</h3>
            {word.examples.map((example, index) => (
              <div key={index} className="mb-2">
                <div className="text-sm">{example.en}</div>
                <div className="text-xs text-gray-600">{example.zh}</div>
              </div>
            ))}
          </div>

          {/* Synonyms Area */}
          <div className="p-4 bg-green-50 mb-4 shadow-sm">
            <h3 className="text-sm font-bold mb-2">近义词</h3>
            {word.synonyms.map((synonym, index) => (
              <div key={index} className="mb-1">
                <div className="text-sm">{synonym.en}</div>
                <div className="text-xs text-gray-600">{synonym.zh}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WordDetail