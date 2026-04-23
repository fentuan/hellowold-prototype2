import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const Practice: React.FC = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/home')
  }

  const handleProfileClick = () => {
    navigate('/profile?showRewards=true')
  }

  const handleDifficultyClick = (level: string) => {
    navigate(`/practice/level/${level}`)
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="w-[320px] h-[320px] mx-auto my-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-orange-400 to-red-500 p-3 flex items-center justify-between text-white">
          <button
            className="p-2 rounded-full hover:bg-white/20 active:scale-95"
            onClick={handleBackClick}
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-base font-bold">练习闯关</h1>
          <button
            className="px-3 py-1 bg-white/20 rounded-full text-sm active:scale-95"
            onClick={handleProfileClick}
          >
            100 积分
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {/* Title */}
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold">选择难度阶段</h2>
            <p className="text-xs text-gray-500">各阶段进度独立，完成闯关获取星星</p>
          </div>
          <div
            className="p-4 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg cursor-pointer active:scale-95"
            onClick={() => handleDifficultyClick('beginner')}
          >
            <div className="flex items-center">
              <span className="text-xl mr-3">🌱</span>
              <div>
                <h3 className="font-bold">入门 (Beginner)</h3>
                <p className="text-xs opacity-90">4个主题</p>
              </div>
            </div>
          </div>

          <div
            className="p-4 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-500 text-white shadow-lg cursor-pointer active:scale-95"
            onClick={() => handleDifficultyClick('intermediate')}
          >
            <div className="flex items-center">
              <span className="text-xl mr-3">🌟</span>
              <div>
                <h3 className="font-bold">初级 (Intermediate)</h3>
                <p className="text-xs opacity-90">4个主题</p>
              </div>
            </div>
          </div>

          <div
            className="p-4 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg cursor-pointer active:scale-95"
            onClick={() => handleDifficultyClick('advanced')}
          >
            <div className="flex items-center">
              <span className="text-xl mr-3">🏆</span>
              <div>
                <h3 className="font-bold">高级 (Advanced)</h3>
                <p className="text-xs opacity-90">4个主题</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practice