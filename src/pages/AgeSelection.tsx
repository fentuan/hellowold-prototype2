import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, GraduationCap, Award } from 'lucide-react'

const AgeSelection: React.FC = () => {
  const navigate = useNavigate()

  const handleAgeGroupSelect = (level: string) => {
    localStorage.setItem('currentLevel', level)
    localStorage.setItem('hasCompletedOnboarding', 'true')
    navigate('/home')
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="w-[320px] h-[320px] mx-auto my-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white">
            <h1 className="text-lg font-bold text-center">HelloWorld</h1>
            <p className="text-sm text-center">选择你的年龄段</p>
          </div>

          {/* Age Group Cards */}
          <div className="flex-1 p-4 flex flex-col justify-center space-y-4">
          <div
            className="p-4 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg cursor-pointer active:scale-95"
            onClick={() => handleAgeGroupSelect('pre-a1')}
          >
            <div className="flex items-center">
              <BookOpen className="mr-3" />
              <div>
                <h2 className="font-bold">幼儿启蒙 (PRE-A1)</h2>
                <p className="text-xs opacity-90">小学1-2年级</p>
              </div>
            </div>
          </div>

          <div
            className="p-4 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-500 text-white shadow-lg cursor-pointer active:scale-95"
            onClick={() => handleAgeGroupSelect('a1')}
          >
            <div className="flex items-center">
              <GraduationCap className="mr-3" />
              <div>
                <h2 className="font-bold">小学进阶 (A1)</h2>
                <p className="text-xs opacity-90">小学3-6年级</p>
              </div>
            </div>
          </div>

          <div
            className="p-4 rounded-xl bg-gradient-to-r from-purple-400 to-blue-500 text-white shadow-lg cursor-pointer active:scale-95"
            onClick={() => handleAgeGroupSelect('a2')}
          >
            <div className="flex items-center">
              <Award className="mr-3" />
              <div>
                <h2 className="font-bold">初中提升 (A2)</h2>
                <p className="text-xs opacity-90">初中7-9年级</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgeSelection