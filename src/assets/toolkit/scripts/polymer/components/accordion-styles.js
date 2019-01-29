import { html } from '@polymer/polymer/polymer-element.js';

export const styles = html`
    <style>
        .accordion {
            border: 1px solid #222;
            transition: all 1s;
            padding: 0.5em;
        }
        
        .accordion h4 {
            margin: 0;
            cursor: pointer;
            position: relative;
        }
        .accordion h4::before {
            position: absolute;
            background-color: rgba(100, 100, 100, 0.25);
            top: 50%;
            margin-top: -10px;
            height: 20px;
            right: 0.5em;
            width: 20px;
            border-radius: 50%;
            transition: 0.25s all;
            transform-origin: 50% 50%;
            font-size: 13px;
            line-height: 20px;
            display: flex;
            justify-content: center;
            content: \'\\276F\';
        }
        .accordion.active h4::before {
            transform: rotate(90deg);
        }
        .accordion h4 ::slotted(a) {
            text-decoration: none;
            position: relative;
            display: block;
        }
        .accordion__content {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 0.25s;
        }
        .accordion.active .accordion__content {
            
            max-height: 1000px;
        }
    </style>
`;