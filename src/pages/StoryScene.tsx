import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Volume2 } from 'lucide-react'
import ImageWithFallback from '../components/ImageWithFallback'

interface Dialogue {
  id: number
  type: 'dialogue' | 'question' | 'complete'
  speaker?: string
  text: string
  translation: string
  options?: {
    text: string
    translation: string
    correct: boolean
  }[]
  reward?: number
}

const StoryScene: React.FC = () => {
  const { scene } = useParams<{ scene: string }>()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const storyData: Record<string, {
    title: string
    titleEn: string
    characterImage: string
    backgroundImage: string
    dialogues: Dialogue[]
  }> = {
    'grandma-cat': {
      title: '帮奶奶找小猫',
      titleEn: 'Help Grandma Find Her Cat',
      characterImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kind%20grandma%20cartoon%20style&image_size=square',
      backgroundImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cozy%20house%20interior%20cartoon%20style&image_size=landscape_16_9',
      dialogues: [
        {
          id: 1,
          type: 'dialogue',
          speaker: '奶奶',
          text: 'Hello, can you help me?',
          translation: '你好，你能帮我吗？',
        },
        {
          id: 2,
          type: 'dialogue',
          speaker: '奶奶',
          text: 'I lost my cat Mimi.',
          translation: '我弄丢了我的小猫咪咪。',
        },
        {
          id: 3,
          type: 'question',
          text: '奶奶丢了什么？',
          translation: 'What did Grandma lose?',
          options: [
            { text: 'her cat', translation: '她的猫', correct: true },
            { text: 'her dog', translation: '她的狗', correct: false },
            { text: 'her bird', translation: '她的鸟', correct: false },
          ],
        },
        {
          id: 4,
          type: 'dialogue',
          speaker: '奶奶',
          text: 'She is orange and very cute.',
          translation: '她是橙色的，非常可爱。',
        },
        {
          id: 5,
          type: 'question',
          text: '咪咪是什么颜色？',
          translation: 'What color is Mimi?',
          options: [
            { text: 'orange', translation: '橙色', correct: true },
            { text: 'white', translation: '白色', correct: false },
            { text: 'black', translation: '黑色', correct: false },
          ],
        },
        {
          id: 6,
          type: 'complete',
          text: 'Thank you! Here she is!',
          translation: '谢谢你！她在这里！',
          reward: 30,
        },
      ],
    },
  }

  const story = storyData[scene || 'grandma-cat']
  const currentDialogue = story.dialogues[currentStep]
  const progress = ((currentStep + 1) / story.dialogues.length) * 100

  const handleBackClick = () => {
    navigate('/story')
  }

  const handleNextClick = () => {
    if (currentStep < story.dialogues.length - 1) {
      setCurrentStep(currentStep + 1)
      setSelectedOption(null)
      setShowResult(false)
    } else {
      // Story complete
      alert('故事完成！获得奖励：30积分')
      navigate('/story')
    }
  }

  const handleOptionClick = (index: number) => {
    const isCorrect = currentDialogue.options?.[index].correct
    if (isCorrect) {
      setSelectedOption(index)
      setShowResult(true)
    } else {
      // 选错时不报错，只是暗调显示
      setSelectedOption(index)
      // 不设置showResult为true，允许继续选择
      setTimeout(() => {
        setSelectedOption(null)
      }, 500)
    }
  }

  const handlePlayAudio = () => {
    // In a real app, this would play the audio
    console.log('Playing audio for:', currentDialogue.text)
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="w-[320px] h-[320px] mx-auto my-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col relative">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-purple-400 to-pink-500 py-1.5 px-3 flex items-center justify-between text-white z-10">
          <button
            className="p-2 rounded-full hover:bg-white/20 active:scale-95"
            onClick={handleBackClick}
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-sm font-bold">{story.title} / {story.titleEn}</h1>
          <div className="bg-white/20 rounded-full px-2 py-0.5 text-xs">
            {currentStep + 1}/{story.dialogues.length}
          </div>
        </div>

        {/* Background */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={story.backgroundImage}
            alt="Story Background"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30"></div>
        </div>

        {/* Character Avatar */}
        <div className="absolute top-3 right-3 w-16 h-16 rounded-full border-3 border-white shadow-xl z-10">
          <ImageWithFallback
            src={story.characterImage}
            alt="Character"
            className="w-full h-full rounded-full"
          />
        </div>

        {/* Progress Bar */}
        <div className="absolute top-3 left-3 right-24 h-1.5 bg-white/30 backdrop-blur-sm rounded-full z-10">
          <div
            className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center p-4 z-10">
          <div className="w-full max-h-[240px] overflow-y-auto">
            {currentDialogue.type === 'dialogue' && (
              <div className="bg-white rounded-2xl p-3 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-purple-100 rounded-full px-3 py-1">
                    <span className="text-xs font-bold text-purple-700">{currentDialogue.speaker}</span>
                  </div>
                  <button
                    className="p-1 rounded-full hover:bg-purple-100 active:scale-95"
                    onClick={handlePlayAudio}
                  >
                    <Volume2 size={16} className="text-purple-500" />
                  </button>
                </div>
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-800 leading-snug">{currentDialogue.text}</p>
                  <p className="text-xs text-gray-600 leading-snug">{currentDialogue.translation}</p>
                </div>
                <button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 rounded-lg active:scale-95 transition-transform"
                  onClick={handleNextClick}
                >
                  继续 →
                </button>
              </div>
            )}

            {currentDialogue.type === 'question' && (
              <div className="bg-white rounded-2xl p-3 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-blue-100 rounded-full px-2 py-0.5">
                    <span className="text-xs font-bold text-blue-700">问题</span>
                  </div>
                  <button
                    className="p-1 rounded-full hover:bg-blue-100 active:scale-95"
                    onClick={handlePlayAudio}
                  >
                    <Volume2 size={16} className="text-blue-500" />
                  </button>
                </div>
                <div className="mb-3">
                  <p className="text-sm font-bold text-gray-800">{currentDialogue.text}</p>
                  <p className="text-xs text-gray-600">{currentDialogue.translation}</p>
                </div>
                <div className="space-y-1.5 mb-3">
                  {currentDialogue.options?.map((option, index) => (
                    <button
                      key={index}
                      className={`w-full rounded-lg py-2 px-3 text-left ${selectedOption === index && !option.correct ? 'bg-gray-200 text-gray-400 opacity-40' : 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-purple-200 text-gray-700 active:scale-98'}`}
                      onClick={() => handleOptionClick(index)}
                      disabled={showResult}
                    >
                      <div className="text-sm font-medium">{option.text}</div>
                      <div className="text-xs opacity-75">{option.translation}</div>
                    </button>
                  ))}
                </div>
                <p className="text-center text-xs text-gray-500 mb-3">选择正确答案继续故事</p>
                {showResult && selectedOption !== null && currentDialogue.options?.[selectedOption].correct && (
                  <button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 rounded-lg active:scale-95 transition-transform"
                    onClick={handleNextClick}
                  >
                    继续 →
                  </button>
                )}
              </div>
            )}

            {currentDialogue.type === 'complete' && (
              <div className="bg-white rounded-2xl p-4 shadow-xl text-center">
                <div className="text-4xl mb-2">🎉</div>
                <h2 className="text-base font-bold text-gray-800 mb-2">故事完成！</h2>
                <p className="text-sm text-gray-600 mb-3">{currentDialogue.text} / {currentDialogue.translation}</p>
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-2 mb-3">
                  <p className="text-xs text-gray-500">获得奖励</p>
                  <p className="text-lg font-bold text-orange-500">+{currentDialogue.reward} 积分</p>
                </div>
                <button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 rounded-lg active:scale-95 transition-transform"
                  onClick={() => {
                    alert('故事完成！获得奖励：30积分')
                    navigate('/story')
                  }}
                >
                  返回故事列表
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoryScene