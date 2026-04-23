import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Lock, Play } from 'lucide-react'
import ImageWithFallback from '../components/ImageWithFallback'

interface Story {
  id: string
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  image: string
  status: 'completed' | 'in-progress' | 'not-started'
  progress?: number
  characterImage: string
}

const stories: Story[] = [
  {
    id: 'grandma-cat',
    title: '帮奶奶找小猫',
    titleEn: 'Help Grandma Find Her Cat',
    description: '帮助奶奶找到她丢失的小猫',
    descriptionEn: 'Help Grandma find her lost cat',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=grandma%20looking%20for%20cat%20cartoon%20style&image_size=landscape_4_3',
    status: 'completed',
    characterImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kind%20grandma%20cartoon%20style&image_size=square',
  },
  {
    id: 'forest-adventure',
    title: '森林冒险',
    titleEn: 'Forest Adventure',
    description: '在森林中探险，学习动物词汇',
    descriptionEn: 'Explore the forest and learn animal words',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=forest%20adventure%20cartoon%20style&image_size=landscape_4_3',
    status: 'in-progress',
    progress: 60,
    characterImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20adventurer%20cartoon%20style&image_size=square',
  },
  {
    id: 'space-journey',
    title: '太空之旅',
    titleEn: 'Space Journey',
    description: '探索太空，学习宇宙词汇',
    descriptionEn: 'Explore space and learn space words',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=space%20journey%20cartoon%20style&image_size=landscape_4_3',
    status: 'not-started',
    characterImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=astronaut%20cartoon%20style&image_size=square',
  },
]

const Story: React.FC = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/home')
  }

  const handleProfileClick = () => {
    navigate('/profile?showRewards=true')
  }

  const handleStoryClick = (storyId: string) => {
    navigate(`/story/${storyId}`)
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="w-[320px] h-[320px] mx-auto my-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-3 flex items-center justify-between text-white">
          <button
            className="p-2 rounded-full hover:bg-white/20 active:scale-95"
            onClick={handleBackClick}
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-base font-bold">故事解谜</h1>
          <button
            className="px-3 py-1 bg-white/20 rounded-full text-sm active:scale-95"
            onClick={handleProfileClick}
          >
            100 积分
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
          {/* Title */}
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold">选择故事</h2>
            <p className="text-xs text-gray-500">在故事中学习英语</p>
          </div>
          {stories.map((story) => (
            <div
              key={story.id}
              className="relative h-28 rounded-xl overflow-hidden shadow-lg cursor-pointer active:scale-95"
              onClick={() => handleStoryClick(story.id)}
            >
              <ImageWithFallback
                src={story.image}
                alt={story.title}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              {story.status === 'not-started' && (
                <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-1.5">
                  <Lock size={16} className="text-white" />
                </div>
              )}
              
              {story.status !== 'not-started' && (
                <div className="absolute top-2 right-2 w-12 h-12 rounded-full border-2 border-white shadow-lg">
                  <ImageWithFallback
                    src={story.characterImage}
                    alt="Character"
                    className="w-full h-full rounded-full"
                  />
                </div>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <h3 className="text-white text-sm font-bold">{story.title} / {story.titleEn}</h3>
                <p className="text-white/90 text-xs">{story.description} / {story.descriptionEn}</p>
              </div>
              
              {story.status === 'completed' && (
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-white flex items-center justify-between px-2 rounded-b-lg">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="text-xs text-green-600">已完成</span>
                  </div>
                  <div className="flex items-center">
                    <Play size={14} className="text-purple-600 mr-1" />
                    <span className="text-xs text-purple-600 font-bold">重玩 +5分</span>
                  </div>
                </div>
              )}
              
              {story.status === 'in-progress' && (
                <div className="absolute bottom-0 left-0 right-0 bg-white rounded-b-lg">
                  <div className="flex items-center justify-between px-2 py-1">
                    <span className="text-xs text-gray-600">进度 {story.progress}%</span>
                    <span className="text-xs text-purple-600 font-bold">继续故事 →</span>
                  </div>
                  <div className="h-1 bg-gray-200 px-2 pb-1">
                    <div
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-300"
                      style={{ width: `${story.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              {story.status === 'not-started' && (
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-white flex items-center justify-between px-2 rounded-b-lg">
                  <span className="text-xs text-gray-600">首次完成 +30积分</span>
                  <div className="flex items-center">
                    <Play size={14} className="text-purple-600 mr-1" />
                    <span className="text-xs text-purple-600 font-bold">开始</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Story