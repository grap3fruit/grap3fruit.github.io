import React, { useEffect } from 'react';

const src = 'https://utteranc.es/client.js';
const branch = 'master';
const DARK_THEME = 'photon-dark';
const LIGHT_THEME = 'github-light';

export const Utterances = ({ repo }) => {
  const rootElm = React.createRef();

  useEffect(() => {
    const utterances = document.createElement('script');
    const utterancesConfig = {
      src,
      repo,
      branch,
      theme: LIGHT_THEME,
      label: 'comment',
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    };

    Object.keys(utterancesConfig).forEach((configKey) => {
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });
    rootElm.current.appendChild(utterances);
  }, []);

  return <div className="utterances" ref={rootElm} />;
};
