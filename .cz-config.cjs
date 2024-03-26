module.exports = {
  types: [
    { value: 'feat', name: '特性 (feat): 新增功能' },
    { value: 'fix', name: '修正 (fix): 修復錯誤' },
    { value: 'docs', name: '文件 (docs): 文件更改' },
    {
      value: 'style',
      name: '樣式 (style): 不影響程式碼含義的更改 \n           (空格、格式、缺少分號等)',
    },
    {
      value: 'refactor',
      name: '重構 (refactor): 不修復錯誤也不新增功能的程式碼更改',
    },
    {
      value: 'perf',
      name: '性能 (perf): 改善性能的程式碼更改',
    },
    { value: 'test', name: '測試 (test): 添加遺漏的測試' },
    {
      value: 'chore',
      name: '建置 (chore): 建置過程或輔助工具和庫的更改 \n           例如文件生成',
    },
    { value: 'revert', name: '還原 (revert): 還原到某個提交' },
    { value: 'WIP', name: '進行中 (WIP): 開發中的程式碼，未完成' },
  ],
  // 預設有 cutstom ，但認為 empty 比較合適，如果需要再依照業務需求設定
  scopes: [{ name: 'empty' }],
  messages: {
    type: "選擇您要提交的更改類型:",
    scope: '\n請選擇此更改的範圍 (可選，按 Enter 繼續):',
    // 如果 allowCustomScopes 為 true
    customScope: '請指定此更改的範圍:',
    subject: '請用簡短的命令式語句描述此更改:\n',
    body: '提供較長の説明來描述此更改 (可選，按 Enter 繼續)。使用 "|" 來換行:\n',
    breaking: '列出任何重大變更 (可選，按 Enter 繼續):\n',
    footer: '列出此更改關閉的任何議題 (可選，按 Enter 繼續)。例如: #31, #34:\n',
    confirmCommit: '您確定要提交上面的更改嗎?',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skipQuestions: ['scope', 'body'],

  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};