import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Search, Mic, Volume2 } from 'lucide-react'

interface Word {
  id: string
  word: string
  meaning: string
}

const recentWords: Word[] = [
  { id: '1', word: 'cat', meaning: '猫' },
  { id: '2', word: 'dog', meaning: '狗' },
  { id: '3', word: 'apple', meaning: '苹果' },
]

const Learning: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/home')
  }

  const handleWordClick = (id: string) => {
    navigate(`/learning/word/${id}`)
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
          <h1 className="text-base font-bold">学习助手</h1>
          <button
            className="p-2 rounded-full hover:bg-white/20 active:scale-95"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search size={20} />
          </button>
        </div>

        {/* Search Box */}
        {showSearch && (
          <div className="p-3 bg-gray-100">
            <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-sm">
              <Search size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="搜索单词..."
                className="flex-1 border-none outline-none text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Mic size={16} className="text-gray-400 ml-2" />
            </div>
          </div>
        )}

        {/* Scrollable Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          <h2 className="text-sm font-bold mb-3">最近学习</h2>
          <div className="space-y-3">
            {recentWords.map((word) => (
              <div
                key={word.id}
                className="flex items-center justify-between p-3 bg-green-50 rounded-lg shadow-sm cursor-pointer active:scale-95"
                onClick={() => handleWordClick(word.id)}
              >
                <div>
                  <div className="font-bold text-sm">{word.word}</div>
                  <div className="text-xs text-gray-600">{word.meaning}</div>
                </div>
                <Volume2 size={18} className="text-green-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learning