# vue-svg-pan-zoom : Vue component for SVG-Pan-Zoom

This module is a very simple [Vue](https://vuejs.org/) component providing the
goodness of [SVG-Pan-Zoom](https://github.com/ariutta/svg-pan-zoom) for SVG elements.

/!\ WARNING: the module is young, basic, probably will have its
API change with no notice, and likely to have
bugs. Use at your own risk, send patches for my eternal gratitude.

## Basic Use

In a Single File Component:

    <template>
        <SvgPanZoom 
            style="width: 500px; height: 500px; border:1px solid black;"
            :zoomEnabled="true"
            :controlIconsEnabled="true"
            :fit="false"
            :center="true"
        >
            <svg>
                <circle x="10" y="10" r="5" />
            </svg>
        </SvgPanZoom>`
    </template>

    <script>
        import SvgPanZoom from 'vue-svg-pan-zoom';

        export default {
            components: {  SvgPanZoom },
        };
    </script>

### Notes

* currently the `SvgPanZoom` component only works with a `svg` child -- `embed` won't work.

* `SvgPanZoom` accepts as attributes all `svg-pan-zoom` options:

    | attribute                 | default                |
    | ---------                 | --------               |
    | zoomEnabled               | true                   |
    | controlIconsEnabled       | false                  |
    | fit                       | true                   |
    | panEnabled                | true                   |
    | dblClickZoomEnabled       | true                   |
    | mouseWheelZoomEnabled     | true                   |
    | preventMouseEventsDefault | true                   |
    | contain                   | false                  |
    | center                    | true                   |
    | viewportSelector          | .svg-pan-zoom_viewport |
    | zoomScaleSensitivity      | 0.2                    |
    | minZoom                   | 0.5                    |
    | maxZoom                   | 10                     |
    | refreshRate               | auto                   |
    | beforeZoom                |                        |
    | onZoom                    |                        |
    | beforePan                 |                        |
    | onPan                     |                        |
    | onUpdatedCTM              |                        |
    | customEventsHandler       |                        |
    | eventsListenerElement     |                        |

## Use with thumbnails

In a Single File Component:

    <template>
        <SvgPanZoom
            style="width: 300px; height: 500px; border:1px solid black; "
        >
            <svg> ... </svg>
            <svg slot="thumbnail" class="thumbViewClass">
                ...
            </svg>
        </SvgPanZoom>
    </template>


    <script>
        import  SvgPanZoom from 'vue-svg-pan-zoom';

        export default {
            components: {  SvgPanZoom },
        };

    </script>

    <style>
        @import 'vue-svg-pan-zoom/dist/vue-svg-pan-zoom.css';
    </style>

Note that for the css import to work, you'll have to have 
[postcss-import](https://github.com/postcss/postcss-import)
installed as a dep.

Also, just like the main `SvgPanZoom`component, the `thumbnail` slot needs to 
be assigned to a `svg` node -- `embed` won't work.

### Storybook demos

To run [Storybook](https://github.com/storybooks/storybook) stories duplicating the demos of
the main `SVG-Pan-Zoom` project, do

    $ yarn install --dev
    $ yarn storybook
