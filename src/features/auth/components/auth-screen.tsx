'use client';

import { useState } from 'react';
import { ISignInFlow } from '../tpye';
import SignInCard from './sign-in-card';
import SignUpCard from './sign-up-card';

const AuthScreen = () => {
  const [state, setState] = useState<ISignInFlow>('signIn');

  return (
    <div className="h-full flex items-center justify-center bg-[#5C3B58]">
      <div className="md:h-auto md:w-[420px]">
        {state == 'signIn' ? (
          <SignInCard setState={setState} />
        ) : (
          <SignUpCard setState={setState} />
        )}
      </div>
    </div>
  );
};

export default AuthScreen;
