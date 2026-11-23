import React from 'react';
import {Composition} from 'remotion';
import {ChishuiFilm} from './film';
export const Root: React.FC = () => <Composition id="Chishui" component={ChishuiFilm} durationInFrames={7200} fps={30} width={1920} height={1080}/>;
