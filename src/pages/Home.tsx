import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Book, Trophy, Sparkles } from 'lucide-react'

const Home: React.FC = () => {
  const [showLevelMenu, setShowLevelMenu] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(localStorage.getItem('currentLevel') || 'pre-a1')
  const navigate = useNavigate()

  const handleLevelChange = (level: string) => {
    setCurrentLevel(level)
    localStorage.setItem('currentLevel', level)
    setShowLevelMenu(false)
  }

  const handleProfileClick = () => {
    navigate('/profile')
  }

  const handleModuleClick = (path: string) => {
    navigate(path)
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="w-[320px] h-[320px] mx-auto my-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col">
        {/* Top Bar */}
        <div className="bg-white p-3 flex justify-between items-center border-b border-gray-100">
          <div className="relative">
            <div
              className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold cursor-pointer active:scale-95"
              onClick={() => setShowLevelMenu(!showLevelMenu)}
            >
              {currentLevel.toUpperCase()}
            </div>
            {showLevelMenu && (
              <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg p-2 z-10">
                <div
                  className={`px-3 py-1 rounded-md text-sm font-bold cursor-pointer ${currentLevel === 'pre-a1' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                  onClick={() => handleLevelChange('pre-a1')}
                >
                  PRE-A1
                </div>
                <div
                  className={`px-3 py-1 rounded-md text-sm font-bold cursor-pointer ${currentLevel === 'a1' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                  onClick={() => handleLevelChange('a1')}
                >
                  A1
                </div>
                <div
                  className={`px-3 py-1 rounded-md text-sm font-bold cursor-pointer ${currentLevel === 'a2' ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                  onClick={() => handleLevelChange('a2')}
                >
                  A2
                </div>
              </div>
            )}
          </div>
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center cursor-pointer active:scale-95"
            onClick={handleProfileClick}
          >
            <User className="text-white" size={18} />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {/* Title */}
          <div className="text-center mb-4">
            <h1 className="text-lg font-bold">开始学习</h1>
            <p className="text-xs text-gray-500">选择一个模块开始</p>
          </div>
          <div
            className="p-4 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg cursor-pointer active:scale-95"
            onClick={() => handleModuleClick('/learning')}
          >
            <div className="flex items-center">
              <Book className="mr-3" />
              <div>
                <h2 className="font-bold">学习助手</h2>
                <p className="text-xs opacity-90">词条查询</p>
              </div>
            </div>
          </div>

          <div
            className="p-4 rounded-xl bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg cursor-pointer active:scale-95"
            onClick={() => handleModuleClick('/practice')}
          >
            <div className="flex items-center">
              <Trophy className="mr-3" />
              <div>
                <h2 className="font-bold">练习闯关</h2>
                <p className="text-xs opacity-90">趣味答题</p>
              </div>
            </div>
          </div>

          <div
            className="p-4 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg cursor-pointer active:scale-95"
            onClick={() => handleModuleClick('/story')}
          >
            <div className="flex items-center">
              <Sparkles className="mr-3" />
              <div>
                <h2 className="font-bold">故事解谜</h2>
                <p className="text-xs opacity-90">冒险探索</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home