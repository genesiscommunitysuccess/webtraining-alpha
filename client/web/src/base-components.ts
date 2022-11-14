import { baseComponents as allZeroComponents } from '@genesislcap/foundation-zero'
import type { Container } from '@microsoft/fast-foundation';
import { zeroButton } from './button';
import { zeroTextField } from './text-field';
export const baseComponents = {
    ...allZeroComponents,
    zeroButton,
    zeroTextField,
    register(container?: Container, ...rest: any[]) {
        if (!container) {
            // preserve backward compatibility with code that loops through
            // the values of this object and calls them as funcs with no args
            return;
        }

        for (const key in this) {
            if (key === 'register') {
                continue;
            }

            this[key]().register(container, ...rest);
        }
    },
}