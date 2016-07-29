# Just to glue it up in the mind

## React

Used to render and sync html effectively through the virtual DOM.

## Mobx and Mobx-React

Used to store the state and propagate the state changes to the view automagically.

## React Bootstrap 

Used to make view composition easier and more clear (`<Panel header="Hello">Content</Panel>` instead of five divs with several classes).

## Typescript 

Used to work safely with all the stuff, including type and name checking inside the TSX-views:

  <pre>&lt;Panel ...&gt; {this.props.store.valeu} &lt;/Panel&gt;
  ///        compiler error here ↑
  </pre>

## WebPack 

Used to build all the `*.ts`, `*.less` and other files into sigle (or multiple) assets, following and resolving all dependencies.
