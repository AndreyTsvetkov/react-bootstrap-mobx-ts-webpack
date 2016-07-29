# Just to glue it up in mind

## ReactJS

Used to render the view

## React Bootstrap 

Used to make view composition easier and more clear (`<Panel header="Hello">Content</Panel>` instead of five divs with several classes)

## Mobx and Mobx-React

Used to store the state and propagate the state changes to the view automagically

## Typescript 

Used to work safely with all the stuff, including type and name checking inside the TSX-views:

  <pre>&lt;Panel ...&gt; {this.props.store.valeu} &lt;/Panel&gt;
  ///        compiler error here ↑
  </pre>

## WebPack 

Used to build all the `*.ts`, `*.less` and other files into sigle (or multiple) assets, following and resolving all dependencies.
