(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{167:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=(n(688),n(689)),a=n.n(o);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(t,e,n,r,i,o,a){try{var s=t[o](a),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(r,i)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function a(t){c(o,r,i,a,s,"next",t)}function s(t){c(o,r,i,a,s,"throw",t)}a(void 0)})}}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){var e="function"==typeof Map?new Map:void 0;return(p=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return f(t,arguments,b(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),g(r,t)})(t)}function f(t,e,n){return(f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&g(i,n.prototype),i}).apply(null,arguments)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=function(t){function e(){var t,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,(t=!(r=b(e).call(this))||"object"!==s(r)&&"function"!=typeof r?d(n):r)._mappings=[],t._highlight=t.getAttribute("highlight")&&e._formatHighlight(t.getAttribute("highlight")),t.pdbId=t.getAttribute("pdbId")?t.getAttribute("pdbId"):"",t.loadMolecule=t.loadMolecule.bind(d(t)),t.loadStructureTable=t.loadStructureTable.bind(d(t)),t._planHighlight=t._planHighlight.bind(d(t)),t._height=t.height||"480px",t}var n,r,i,o,c,f,m;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,p(HTMLElement)),n=e,r=[{key:"connectedCallback",value:function(){var t=this;this.closest("protvista-manager")&&(this.manager=this.closest("protvista-manager"),this.manager.register(this));var n=document.createElement("style");n.innerHTML=this.css,this.appendChild(n);var r=document.createElement("div");r.className="main-container";var i=document.createElement("div");i.className="litemol-container",i.id="litemol-instance",this.messageContainer=document.createElement("span"),this.appendChild(this.messageContainer),this.appendChild(r),r.appendChild(i),this.hideTable||(this.tableDiv=document.createElement("div"),this.tableDiv.className="table-container",r.appendChild(this.tableDiv)),this.loadLiteMol(),this.hideTable&&this.molecule||this.loadUniProtEntry().then(function(n){if(t._pdbEntries=n.dbReferences.filter(function(t){return"PDB"===t.type}).map(function(t){return{id:t.id,properties:{method:e.formatMethod(t.properties.method),chains:e.getChains(t.properties.chains),resolution:e.formatAngstrom(t.properties.resolution)}}}),t._pdbEntries.length<=0)t.style.display="none";else{t.hideTable||t.loadStructureTable();var r=t.molecule?t.molecule:t._pdbEntries.filter(function(t){return"Model"!==t.properties.method})[0].id;t.selectMolecule(r)}}),this.molecule&&this.hideTable&&this.selectMolecule(this.molecule)}},{key:"disconnectedCallback",value:function(){this.manager&&this.manager.unregister(this)}},{key:"attributeChangedCallback",value:function(t,n,r){if(n!==r){var i=parseFloat(r);switch(this["_".concat(t)]="number"==typeof i?r:i,t){case"molecule":(this.hideTable||this._pdbEntries&&this._pdbEntries.length>0)&&this.selectMolecule(r);break;case"highlight":this._highlight=e._formatHighlight(this.getAttribute("highlight"));break;case"height":this._height=r}this._planHighlight(!0)}}},{key:"_planHighlight",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._plannedRender||(this._plannedRender=!0,requestAnimationFrame(function(){t._plannedRender=!1,t._selectedMolecule&&(e?t._highlight.forEach(function(e){t._selectMoleculeWithinRange(e.start,e.end).then(function(){return t.highlightChain()})}):t.highlightChain())}))}},{key:"loadUniProtEntry",value:(m=u(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.ebi.ac.uk/proteins/api/proteins/".concat(this.accession));case 3:return t.next=5,t.sent.json();case 5:return t.abrupt("return",t.sent);case 8:throw t.prev=8,t.t0=t.catch(0),this.addMessage("Couldn't load UniProt entry"),new Error(t.t0);case 12:case"end":return t.stop()}},t,this,[[0,8]])})),function(){return m.apply(this,arguments)})},{key:"loadPDBEntry",value:(f=u(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.ebi.ac.uk/pdbe/api/mappings/uniprot/".concat(e));case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(0),this.addMessage("Couldn't load PDB entry"),new Error(t.t0);case 13:case"end":return t.stop()}},t,this,[[0,9]])})),function(t){return f.apply(this,arguments)})},{key:"loadStructureTable",value:function(){var t=this,e="\n            <table>\n                <thead>\n                    <th>PDB Entry</th>\n                    <th>Method</th>\n                    <th>Resolution</th>\n                    <th>Chain</th>\n                    <th>Positions</th>\n                    <th>Links</th>\n                </thead>\n                <tbody>\n                    ".concat(this._pdbEntries.map(function(t){return'\n                        <tr id="entry_'.concat(t.id,'" class="').concat("Model"===t.properties.method?"pdb-row":"pdb-row-clickable",'" title="').concat("Model"===t.properties.method?"No structure available for this model":"",'">\n                            <td>\n                            <strong>').concat(t.id,'</strong><br/>\n                            </td>\n                            <td title="').concat(t.properties.method,'">').concat(t.properties.method,"</td>\n                            <td>").concat(t.properties.resolution,"</td>\n                            <td>").concat(t.properties.chains.map(function(t){return'<div title="'.concat(t.chains,'">').concat(t.chain,"</div>")}).join(""),"</td>\n                            <td>").concat(t.properties.chains.map(function(t){return"<div>".concat(t.start,"-").concat(t.end,"</div>")}).join(""),'</td>\n                            <td>\n                                <a target="_blank" title="Protein Data Bank Europe" href="//www.ebi.ac.uk/pdbe/entry/pdb/').concat(t.id,'">PDBe</a><br> \n                                <a target="_blank" title="Protein Data Bank RCSB" href="//www.rcsb.org/pdb/explore/explore.do?pdbId=').concat(t.id,'">RCSB PDB</a><br>\n                                <a target="_blank" title="Protein Data Bank Japan" href="//pdbj.org/mine/summary/').concat(t.id,'">PDBj</a><br>\n                                <a target="_blank" href="//www.ebi.ac.uk/thornton-srv/databases/cgi-bin/pdbsum/GetPage.pl?pdbcode=').concat(t.id,'">PDBsum</a>\n                            </td>\n                        </tr>\n                    ')}).join(""),"\n                </tbody>\n            </table>\n        ");this.tableDiv.innerHTML=e,this.querySelectorAll(".pdb-row-clickable").forEach(function(e){return e.addEventListener("click",function(){return t.selectMolecule(e.id.replace("entry_",""))})})}},{key:"selectMolecule",value:(c=u(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadPDBEntry(e);case 2:return n=t.sent,r=this.processMapping(n),this.hideTable||(this.querySelectorAll(".active").forEach(function(t){return t.classList.remove("active")}),this.querySelector("#entry_".concat(e)).classList.add("active")),t.next=7,this.loadMolecule(e);case 7:this._selectedMolecule={id:e,mappings:r},this._planHighlight();case 9:case"end":return t.stop()}},t,this)})),function(t){return c.apply(this,arguments)})},{key:"loadLiteMol",value:function(){var t=a.a.Plugin;this.Command=a.a.Bootstrap.Command,this.Query=a.a.Core.Structure.Query,this.Bootstrap=a.a.Bootstrap,this.Core=a.a.Core,this.Tree=this.Bootstrap.Tree,this.CoreVis=a.a.Visualization,this.Transformer=this.Bootstrap.Entity.Transformer,this.Visualization=this.Bootstrap.Visualization,this.Event=this.Bootstrap.Event,this.Context=t.Components.Context,this._liteMol=t.create({target:this.querySelector("#litemol-instance"),viewportBackground:"#fff",layoutState:{hideControls:!0},allowAnalytics:!1})}},{key:"loadMolecule",value:function(t){this._liteMol.clear();var e=this._liteMol.createTransform();return e.add(this._liteMol.root,this.Transformer.Data.Download,{url:"https://www.ebi.ac.uk/pdbe/coordinates/".concat(t.toLowerCase(),"/full?encoding=BCIF"),type:"Binary",_id:t}).then(this.Transformer.Data.ParseBinaryCif,{id:t},{isBinding:!0,ref:"cifDict"}).then(this.Transformer.Molecule.CreateFromMmCif,{blockIndex:0},{isBinding:!0}).then(this.Transformer.Molecule.CreateModel,{modelIndex:0},{isBinding:!1,ref:"model"}).then(this.Transformer.Molecule.CreateMacromoleculeVisual,{polymer:!0,polymerRef:"polymer-visual",het:!0,water:!0}),this._liteMol.applyTransform(e)}},{key:"getTheme",value:function(){var t=new Map;return t.set("Uniform",this.CoreVis.Color.fromRgb(207,178,178)),t.set("Selection",this.CoreVis.Color.fromRgb(255,255,0)),t.set("Highlight",this.CoreVis.Theme.Default.HighlightColor),this.Visualization.Molecule.uniformThemeProvider(void 0,{colors:t})}},{key:"addMessage",value:function(t){this.removeMessage(),this._liteMol.command(this.Bootstrap.Command.Toast.Show,{key:"UPMessage",message:t,timeoutMs:3e4})}},{key:"removeMessage",value:function(){this._liteMol.command(this.Bootstrap.Command.Toast.Hide,{key:"UPMessage"})}},{key:"processMapping",value:function(t){return Object.values(t)[0].UniProt[this.accession]?Object.values(t)[0].UniProt[this.accession].mappings:null}},{key:"translatePositions",value:function(t,e){if("string"==typeof this.highlight)return null;var n=!0,r=!1,i=void 0;try{for(var o,a=this._selectedMolecule.mappings[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(s.unp_end-s.unp_start==s.end.residue_number-s.start.residue_number){if(t>=s.unp_start&&e<=s.unp_end){var l=s.unp_start-s.start.residue_number;return{entity:s.entity_id,chain:s.chain_id,start:t-l,end:e-l}}this.addMessage("Positions not found in this structure")}else this.addMessage("Mismatch between protein sequence and structure residues")}}catch(t){r=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return null}},{key:"highlightChain",value:function(){var t=this;if(this._highlight){this.Command.Visual.ResetTheme.dispatch(this._liteMol.context,void 0),this.Command.Tree.RemoveNode.dispatch(this._liteMol.context,"sequence-selection");var e=this._liteMol.context.select("polymer-visual")[0];if(e){var n=l(this._highlight,1)[0],r=this.translatePositions(n.start,n.end);if(r){var i=this.Query.sequence(r.entity.toString(),r.chain,{seqNumber:r.start},{seqNumber:r.end}),o=this.getTheme(),a=this._liteMol.createTransform().add(e,this.Transformer.Molecule.CreateSelectionFromQuery,{query:i,name:"My name"},{ref:"sequence-selection"});this._liteMol.applyTransform(a).then(function(){t.Command.Visual.UpdateBasicTheme.dispatch(t._liteMol.context,{visual:e,theme:o})}),this.removeMessage()}}}}},{key:"_selectMoleculeWithinRange",value:(o=u(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this._pdbEntries){t.next=2;break}return t.abrupt("return");case 2:if(r=this._pdbEntries.filter(function(t){return"Model"!==t.properties.method&&t.properties.chains.filter(function(t){return t.start<=e&&t.end>=n}).length>0}),!this._selectedMolecule){t.next=6;break}if(!(this._selectedMolecule.mappings.filter(function(t){return t.unp_start<=e&&t.unp_end>=n}).length>0)){t.next=6;break}return t.abrupt("return");case 6:if(!(r&&r.length>0)){t.next=9;break}return t.next=9,this.selectMolecule(r[0].id);case 9:case"end":return t.stop()}},t,this)})),function(t,e){return o.apply(this,arguments)})},{key:"css",get:function(){return"\n    :root {\n      --blue: 0, 112, 155;\n      /* --width: 100%; */\n  }\n  \n  protvista-structure h4 {\n      display: inline;\n      margin-right: 1em;\n  }\n  \n  .main-container {\n      display: flex;\n  }\n  \n  .litemol-container,\n  .table-container {\n      width: 50%;\n      height: ".concat(this._height,";\n      position: relative;\n  }\n\n  .litemol-container {\n    width: ").concat(this.hideTable?"100":"50","%;\n  }\n  \n  .table-container table {\n      display: flex;\n      flex-flow: column;\n      width: 100%;\n      height: ").concat(this._height,";\n      border-collapse: collapse;\n  }\n  \n  .table-container thead {\n      min-height: 3em;\n      flex: 0 0 auto;\n      width: 100%;\n  }\n  \n  .table-container tbody {\n      flex: 1 1 auto;\n      display: block;\n      overflow-y: scroll;\n      border: none;\n  }\n  \n  .table-container tbody tr {\n      width: 100%;\n  }\n  \n  .table-container tbody tr.pdb-row {\n      color: #727376;\n  }\n  \n  .table-container tbody tr.pdb-row-clickable {\n      cursor: pointer;\n  }\n  \n  .table-container tbody tr td {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n  }\n  \n  .table-container thead,\n  .table-container tbody tr {\n      display: table;\n      table-layout: fixed;\n  }\n  \n  .table-container tbody tr.pdb-row-clickable:hover {\n      background-color: rgba(0, 112, 155, 0.15);\n      ;\n  }\n  \n  .table-container tr.active {\n      background-color: rgba(0, 112, 155, 0.3);\n      ;\n  }\n\n  .lm-viewport-controls {\n    display: ").concat(this.hideViewportControls?"none":"block",";\n  }\n    ")}},{key:"accession",get:function(){return this.getAttribute("accession")},set:function(t){return this.setAttribute("accession",t)}},{key:"hideTable",get:function(){return this.getAttribute("hide-table")}},{key:"molecule",get:function(){return this.getAttribute("molecule")}},{key:"height",get:function(){return this.getAttribute("height")}},{key:"hideViewportControls",get:function(){return this.getAttribute("hide-viewport-controls")}}],i=[{key:"_formatHighlight",value:function(t){return t.split(",").map(function(t){var e=l(t.split(":"),2),n=e[0],r=e[1];return{start:Number(n),end:Number(r)}})}},{key:"getChains",value:function(t){return t.split(",").map(function(t){var e=t.trim().split("=");return{chain:e[0],start:e[1].split("-")[0],end:e[1].split("-")[1]}})}},{key:"formatMethod",value:function(t){switch(t){case"EM":return"Electron microscopy";default:return t}}},{key:"formatAngstrom",value:function(t){return t?t.replace("A","&#8491;"):""}},{key:"observedAttributes",get:function(){return["highlight","molecule","height"]}}],r&&h(n.prototype,r),i&&h(n,i),e}(),y=n(110),v=(n(693),n(49)),w=n(700),_=n.n(w);e.default=function(t){return Object(y.a)("protvista-structure",m),i.a.createElement(r.Fragment,null,i.a.createElement(v.default,{content:_.a}),i.a.createElement("protvista-structure",{accession:"P06493",highlight:"209:220"}))}},700:function(t,e){t.exports='<h1 id="protvista-structure">protvista-structure</h1>\n<p><a href="https://www.npmjs.com/package/protvista-structure"><img src="https://img.shields.io/npm/v/protvista-structure.svg" alt="Published on NPM"></a></p>\n<p>In progress - A native web component wrapper around LiteMol</p>\n<h2 id="usage">Usage</h2>\n<pre><code class="language-html">&lt;!-- With UniProt Accession --&gt;\n&lt;protvista-structure accession=&quot;P06493&quot; /&gt;\n&lt;!-- To highlight a position/range --&gt;\n&lt;protvista-structure accession=&quot;P06493&quot; highlight=&quot;209:220&quot; /&gt;\n&lt;!-- With a specific PDBe entry selected and the entrie table being hidden --&gt;\n&lt;protvista-structure\n  accession=&quot;P06493&quot;\n  highlight=&quot;209:220&quot;\n  molecule=&quot;4YC3&quot;\n  hide-table\n/&gt;</code></pre>\n<h2 id="api-reference">API Reference</h2>\n<h3 id="properties">Properties</h3>\n<h4 id="accession"><code>accession</code></h4>\n<p>A UniProt protein accession.</p>\n<h4 id="highlight"><code>highlight</code></h4>\n<p>This is a numerical range, represented as a string e.g. &quot;10-20&quot;. When available, it will highlight all the residues corresponding to the given sequence positions.</p>\n<h4 id="hide-table"><code>hide-table</code></h4>\n<p>It will prevent the PDBe entries table to render next to the 3D structure.</p>\n<h4 id="molecule"><code>molecule</code></h4>\n<p>When available this PDBe structure will be selected, otherwise the first structure in the entry list that its <code>properties.method !== &quot;Model&quot;</code> will be selected and displayed.</p>\n<h4 id="height"><code>height</code></h4>\n<p>The optional height of both table -- if visible, and the 3D structure. By default the value is set to <code>480px</code>. This should be a string value, representing a valid CSS value for an element&#39;s height property.</p>\n<h4 id="hide-viewport-controls"><code>hide-viewport-controls</code></h4>\n<p>Optionally you can hide the viewport controls -- located on the top-right corner of the 3D visualisation, by passing this attribute. This can be particularly useful when the size of 3D visualisation doesn&#39;t allow for extra controls to be included.</p>\n'}}]);