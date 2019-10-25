import {configure} from '@storybook/react';
import "semantic-ui-css/semantic.min.css";
import {addDecorator} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import 'storybook-chromatic';

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.tsx?$/), module);
addDecorator(
    withInfo({
        styles: {
            header: {
                h1: {
                    marginRight: '20px',
                    fontSize: '25px',
                    display: 'flex',
                },
                body: {
                    paddingTop: 60,
                    paddingBottom: 0,
                },
                h2: {
                    display: 'flex',
                    color: 'white',
                }
                ,
            },
            infoBody: {
                backgroundColor: 'white',
                padding:
                    '0px 5px',
                lineHeight:
                    '2',
            }
            ,
        },
        inline: true,
        source:
            false,
    })
)
;