import axios from 'axios';
import {ProviderInterface} from '../provider-interface';
import {ProviderType} from '../provider-type';

export class WebHook implements ProviderInterface {
	name = 'webhook';
	type = ProviderType.WEBHOOK;

	public async send(to: string, from: string, message: string): Promise<boolean> {
		await axios.post('https://httpbin.org/post', message);

		return true;
	}
}
