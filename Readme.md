# Js-Hotspot



> A very simple lightweight tool to create responsive image hotspots.

- [Demo](https://debjyoti.co)

## Main

```text
dist/
├── hotspot.js       
└── hotspot.css   
```

## Getting started

### Installation



Include files:

```html
<script src="/path/to/hotspot.js"></script><!-- It is required -->

<link  href="/path/to/hotspot.css" rel="stylesheet">
<!-- It is required -->

```

### Usage

>This tool uses HTML maps to define hotspot areas. 
Also note that for now, it only supports rectaangular areas.

Wrap your map component with a container with class= "hotspot"

```html
<!-- Wrap the map and area elements with a block element (container) -->
 <div class="hotspot" >
```

```css
/* Give explicit height and width to the hotspot element */

    img {
  
        height:100%;
  
        width:100% 
}

/* This rule is very important, please do not ignore this! */
    
    
```

>Note :  This step is important because the map co-ordinates you provide are with respect to the original dimensions of the image.
```html

<!-- Provide h-height and h-width parameters to the hotspot components -->

<div class="hotspot" h-height="750" h-width=""></div>


<!-- h-height and h-width represent the original image's height and width.

For example if you include an image whose original dimesions are 1000*750 then, h-height and h-width are 750 and 1000 respectively-->

```
For example,

```html
 <div class="hotspot"  style="width:100%;height:100%;padding-top: 30px">
            
            <img src="./assets/example2.jpg"
                alt="Workplace" usemap="#workmap" />

            <map name="workmap">
                <area shape="rect" coords="752,55,910,135" alt="Small Glasses" h-trigger="glasses-small" />
                <area shape="rect" coords="152,350,260,440" alt="WhiteDot" h-trigger="white-dot" />
                <area shape="rect" coords="97,488,630,750" alt="Notebook" h-trigger="Notebook" />

            </map>
        </div>


```
 Provide h-items ( div with an id="h-items") ,
```html
  <div id="h-items">
       
       <div id="white-dot">White Dot</div>
        
       <div id="glasses-small">glasses-small</div>
        
       <div id="Notebook">Notebook</div>


  </div>
<!-- include any content that you want to show on click, inside h-items. You can style these elements accordingly. These elements will show up on click on areas of interest. The mapping will be defined by you. -->

```
>Note : Include content for all hotspots in your page in a single h-item container.

Finally,

>include attribute ```h-trigger ``` to each map element with value equal to the corresponding item in ``` h-items``` container.

So if your ``` h-items``` conatins an item with id ``` glasses-small ```, include an ``` h-trigger="glasses-small"``` to the corresponding area element.
```html
  
  <map name="workmap">
                
                <area shape="rect" coords="752,55,910,135" alt="Small Glasses"  h-trigger="glasses-small" />
    
            </map>

    <!--- element with id="glasses-small" will appear when the above area is clicked on --->

```
Checkout the examples to get a clear picture of how this tool works.



## Browser support

It is the same as the [browser support of Cropper.js](https://github.com/fengyuanchen/cropperjs#browser-support). As a jQuery plugin, you also need to see the [jQuery Browser Support](https://jquery.com/browser-support/).

## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md).

## Versioning

Maintained under the [Semantic Versioning guidelines](https://semver.org/).

## License

[MIT](https://opensource.org/licenses/MIT) © Debjyoti Banerjee