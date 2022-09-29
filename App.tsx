import 'react-native-gesture-handler';

import { BlueBaseApp } from '@bluebase/core';
import React from 'react';

import { configs } from './configs';
import { plugins } from './plugins';

export default function App() {
	return (
		<BlueBaseApp configs={configs} plugins={plugins} />
	);
}
