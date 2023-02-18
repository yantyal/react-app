import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import { Amplify } from 'aws-amplify';
import aws_exports from './aws-exports';

// 初期化処理はなるべくindex.jsに書く
// Amplifyの設定情報を読み込む
Amplify.configure(awsconfig);
Amplify.configure(aws_exports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Amplifyの設定や機能を反映させるためのReactコンポーネント */}
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  </React.StrictMode>
);


