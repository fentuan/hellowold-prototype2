import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const WatchHome: React.FC = () => {
  const [time, setTime] = useState(new Date())
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleHelloWorldClick = () => {
    const currentLevel = localStorage.getItem('currentLevel')
    if (currentLevel) {
      navigate('/home')
    } else {
      navigate('/age-selection')
    }
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="w-[320px] h-[320px] mx-auto my-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-4 py-2 bg-white">
          <div className="text-xs">📶</div>
          <div className="text-xs">🔋 85%</div>
        </div>

        {/* Clock */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="text-4xl font-bold">
            {time.toLocaleTimeString('zh-CN', { hour12: false, hour: '2-digit', minute: '2-digit' })}
          </div>
          <div className="text-sm text-gray-500 mt-1">
            {time.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
          </div>
        </div>

        {/* App Grid */}
        <div className="grid grid-cols-3 gap-4 px-6 pb-8">
          <div
            className="flex flex-col items-center cursor-pointer active:scale-95"
            onClick={handleHelloWorldClick}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg relative">
              <div className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-pulse"></div>
              <span className="text-white font-bold text-sm z-10">HelloWorld</span>
            </div>
            <span className="text-xs mt-1 text-gray-500">英语</span>
          </div>
          <div className="flex flex-col items-center opacity-50">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">💬</span>
            </div>
            <span className="text-xs mt-1 text-gray-500">消息</span>
          </div>
          <div className="flex flex-col items-center opacity-50">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">📞</span>
            </div>
            <span className="text-xs mt-1 text-gray-500">电话</span>
          </div>
          <div className="flex flex-col items-center opacity-50">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">📷</span>
            </div>
            <span className="text-xs mt-1 text-gray-500">相机</span>
          </div>
          <div className="flex flex-col items-center opacity-50">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">🎵</span>
            </div>
            <span className="text-xs mt-1 text-gray-500">音乐</span>
          </div>
          <div className="flex flex-col items-center opacity-50">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">🏃</span>
            </div>
            <span className="text-xs mt-1 text-gray-500">运动</span>
          </div>
        </div>

        {/* Bottom Indicator */}
        <div className="flex justify-center mb-2">
          <div className="w-2 h-2 rounded-full bg-white mx-1"></div>
          <div className="w-2 h-2 rounded-full bg-white/50 mx-1"></div>
        </div>

        {/* Hint Text */}
        <div className="text-center text-xs text-blue-500 mb-2">
          👆 点击 HelloWorld 开始学习
        </div>
      </div>
    </div>
  )
}

export default WatchHome