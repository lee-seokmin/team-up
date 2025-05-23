export default function NotificationsSettingTab() {
  return (
    <div className="bg-component-background backdrop-blur-sm rounded-xl overflow-hidden border border-component-border">
      <div className="border-b border-component-border px-6 py-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <h2 className="text-lg font-semibold text-text-primary">알림 설정</h2>
      </div>
          
      <div className="p-6 space-y-5">
        <div className="flex items-center justify-between p-4 bg-component-secondary-background rounded-lg border border-component-border transition-all hover:border-component-border-hover">
          <div>
            <h3 className="text-text-primary font-medium">이메일 알림</h3>
            <p className="text-text-secondary text-sm mt-1">프로젝트 업데이트에 대한 이메일 알림을 받습니다.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-component-tertiary-background rounded-full peer peer-checked:bg-point-color-indigo peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>
            
        <div className="flex items-center justify-between p-4 bg-component-secondary-background rounded-lg border border-component-border transition-all hover:border-component-border-hover">
          <div>
            <h3 className="text-text-primary font-medium">댓글 알림</h3>
            <p className="text-text-secondary text-sm mt-1">새 댓글이 작성되면 알림을 받습니다.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-component-tertiary-background rounded-full peer peer-checked:bg-point-color-indigo peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>
            
        <div className="flex items-center justify-between p-4 bg-component-secondary-background rounded-lg border border-component-border transition-all hover:border-component-border-hover">
          <div>
            <h3 className="text-text-primary font-medium">마감일 알림</h3>
            <p className="text-text-secondary text-sm mt-1">마감일이 가까워지면 알림을 받습니다.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-component-tertiary-background rounded-full peer peer-checked:bg-point-color-indigo peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>

        <div className="flex items-start gap-2 text-gray-400 mt-2 p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
          <svg className="h-5 w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-indigo-400">알림 설정은 자동으로 저장됩니다.</p>
        </div>
      </div>
    </div>
  );
}