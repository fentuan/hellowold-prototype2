import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ArrowLeft, User, Star, Book, Settings, Calendar, Clock, Award, X, Check } from 'lucide-react'

const Profile: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showAvatarModal, setShowAvatarModal] = useState(false)
  const [showNicknameModal, setShowNicknameModal] = useState(false)
  const [showExchangeModal, setShowExchangeModal] = useState(false)
  const [nickname, setNickname] = useState('小学习者')
  const [selectedAvatar, setSelectedAvatar] = useState(0)
  const [showReport, setShowReport] = useState(false)
  const [activeReportTab, setActiveReportTab] = useState('week')

  // 检查是否需要自动打开奖励弹窗
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get('showRewards') === 'true') {
      setShowExchangeModal(true)
    }
  }, [location.search])
  
  const avatars = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯']

  const handleBackClick = () => {
    navigate('/')
  }

  const handleLogout = () => {
    localStorage.removeItem('currentLevel')
    localStorage.removeItem('hasCompletedOnboarding')
    navigate('/')
  }

  const handleAvatarChange = (index: number) => {
    setSelectedAvatar(index)
  }

  const handleConfirmAvatar = () => {
    setShowAvatarModal(false)
  }

  const handleConfirmNickname = () => {
    setShowNicknameModal(false)
  }

  const handleExchangeConfirm = () => {
    setShowExchangeModal(false)
  }

  const handleExchangeCancel = () => {
    setShowExchangeModal(false)
  }

  const [showExchangeHistory, setShowExchangeHistory] = useState(false)

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="w-[320px] h-[320px] mx-auto my-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col">
        {/* Top Bar */}
        <div className="bg-white p-3 flex items-center justify-between border-b border-gray-100">
          <button
            className="p-2 rounded-full hover:bg-gray-100 active:scale-95"
            onClick={handleBackClick}
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-base font-bold">个人中心</h1>
          <button
            className="text-xs text-red-500 active:scale-95"
            onClick={handleLogout}
          >
            退出登录
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          {/* User Info */}
          <div className="mb-4">
            <div className="flex items-center mb-4">
              <div 
                className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mr-4 cursor-pointer"
                onClick={() => setShowAvatarModal(true)}
              >
                <span className="text-2xl">{avatars[selectedAvatar]}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-bold">{nickname}</h2>
                  <button 
                    className="text-xs text-blue-500"
                    onClick={() => setShowNicknameModal(true)}
                  >
                    修改
                  </button>
                </div>
                <p className="text-sm text-gray-500">ID: 123456789</p>
                <p className="text-xs text-gray-500">{localStorage.getItem('currentLevel')?.toUpperCase() || 'PRE-A1'}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* 错题本 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-3 border-b border-gray-100">
                <div className="flex items-center">
                  <Book size={18} className="text-blue-500 mr-2" />
                  <h3 className="font-bold text-sm">错题本</h3>
                </div>
              </div>
              <div className="p-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                    <span className="text-xs">动物世界 - 单元1</span>
                    <span className="text-xs text-gray-500">3 题</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                    <span className="text-xs">动物世界 - 单元2</span>
                    <span className="text-xs text-gray-500">2 题</span>
                  </div>
                  <button className="w-full mt-2 text-xs text-blue-500">
                    查看全部
                  </button>
                </div>
              </div>
            </div>

            {/* 我的奖励 */}
            <div 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer"
              onClick={() => setShowExchangeModal(true)}
            >
              <div className="p-3 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award size={18} className="text-yellow-500 mr-2" />
                    <h3 className="font-bold text-sm">我的奖励</h3>
                  </div>
                  <div className="text-xs font-bold">
                    100 积分
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="text-xs text-gray-500 mb-2">积分长期有效</div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">兑换记录</span>
                  <span 
                    className="text-xs text-gray-500 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowExchangeHistory(true);
                    }}
                  >
                    查看
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs">可兑换奖励</span>
                  <span 
                    className="text-xs text-gray-500 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowExchangeModal(true);
                    }}
                  >
                    查看
                  </span>
                </div>
              </div>
            </div>

            {/* 学习报告 */}
            <div 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer"
              onClick={() => setShowReport(true)}
            >
              <div className="p-3 border-b border-gray-100">
                <div className="flex items-center">
                  <Calendar size={18} className="text-green-500 mr-2" />
                  <h3 className="font-bold text-sm">学习报告</h3>
                </div>
              </div>
              <div className="p-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs">本周学习时间</span>
                  <span className="text-xs font-bold">5h 20m</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs">本月学习时间</span>
                  <span className="text-xs font-bold">22h 15m</span>
                </div>
              </div>
            </div>

            {/* 设置功能 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-3 border-b border-gray-100">
                <div className="flex items-center">
                  <Settings size={18} className="text-gray-500 mr-2" />
                  <h3 className="font-bold text-sm">设置</h3>
                </div>
              </div>
              <div className="p-3">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg">
                    <span className="text-xs">隐私协议</span>
                    <span className="text-xs text-gray-400">查看</span>
                  </div>
                  <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg">
                    <span className="text-xs">天才号</span>
                    <span className="text-xs text-blue-500">开通</span>
                  </div>
                  <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg">
                    <span className="text-xs">关于我们</span>
                    <span className="text-xs text-gray-400">v1.0.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 更换头像弹窗 */}
      {showAvatarModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[280px] p-4">
            <h3 className="text-center font-bold mb-4">选择头像</h3>
            <div className="grid grid-cols-5 gap-3 mb-4">
              {avatars.map((avatar, index) => (
                <div 
                  key={index}
                  className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer ${index === selectedAvatar ? 'bg-blue-100 border-2 border-blue-500' : 'bg-gray-100'}`}
                  onClick={() => handleAvatarChange(index)}
                >
                  <span className="text-xl">{avatar}</span>
                </div>
              ))}
            </div>
            <button 
              className="w-full py-2 bg-blue-500 text-white rounded-full text-sm font-bold"
              onClick={handleConfirmAvatar}
            >
              确认
            </button>
          </div>
        </div>
      )}

      {/* 修改昵称弹窗 */}
      {showNicknameModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[280px] p-4">
            <h3 className="text-center font-bold mb-4">修改昵称</h3>
            <input 
              type="text" 
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4 text-sm"
              placeholder="请输入昵称"
            />
            <button 
              className="w-full py-2 bg-blue-500 text-white rounded-full text-sm font-bold"
              onClick={handleConfirmNickname}
            >
              确认
            </button>
          </div>
        </div>
      )}

      {/* 积分兑换弹窗 */}
      {showExchangeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[280px] p-4">
            <h3 className="text-center font-bold mb-4">积分兑换</h3>
            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-yellow-500">100</div>
              <div className="text-xs text-gray-500">当前积分</div>
            </div>
            <div className="space-y-3 mb-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm">卡通贴纸</span>
                  <span className="text-xs text-gray-500">50 积分</span>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm">练习模块限定卡通人物</span>
                  <span className="text-xs text-gray-500">80 积分</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button 
                className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-full text-sm"
                onClick={handleExchangeCancel}
              >
                取消
              </button>
              <button 
                className="flex-1 py-2 bg-blue-500 text-white rounded-full text-sm font-bold"
                onClick={handleExchangeConfirm}
              >
                兑换
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 学习报告弹窗 */}
      {showReport && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[280px] p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">学习报告</h3>
              <button onClick={() => setShowReport(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="flex space-x-2 mb-4">
              <button 
                className={`flex-1 py-1 text-xs rounded-full ${activeReportTab === 'week' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setActiveReportTab('week')}
              >
                周报告
              </button>
              <button 
                className={`flex-1 py-1 text-xs rounded-full ${activeReportTab === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setActiveReportTab('month')}
              >
                月报告
              </button>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-xs">学习时间</span>
                  <span className="text-xs font-bold">{activeReportTab === 'week' ? '5h 20m' : '22h 15m'}</span>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-xs">完成关卡</span>
                  <span className="text-xs font-bold">{activeReportTab === 'week' ? '8' : '32'}</span>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-xs">学习单词</span>
                  <span className="text-xs font-bold">{activeReportTab === 'week' ? '25' : '100'}</span>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-xs">获得积分</span>
                  <span className="text-xs font-bold">{activeReportTab === 'week' ? '150' : '600'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 兑换记录弹窗 */}
      {showExchangeHistory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[280px] p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">兑换记录</h3>
              <button onClick={() => setShowExchangeHistory(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="text-center py-8">
              <div className="text-gray-400 mb-2">📦</div>
              <div className="text-sm text-gray-500">目前暂无</div>
            </div>
            <button 
              className="w-full py-2 bg-blue-500 text-white rounded-full text-sm font-bold"
              onClick={() => setShowExchangeHistory(false)}
            >
              确定
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile