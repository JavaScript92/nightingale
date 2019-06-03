(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{146:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),o=n(473),a=n.n(o);n(477);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}function l(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function a(t){c(o,r,i,a,s,"next",t)}function s(t){c(o,r,i,a,s,"throw",t)}a(void 0)})}}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){var e="function"==typeof Map?new Map:void 0;return(d=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return p(t,arguments,m(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}function p(t,e,n){return(p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&f(i,n.prototype),i}).apply(null,arguments)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var g=function(t){function e(){var t,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,(t=!(r=m(e).call(this))||"object"!==s(r)&&"function"!=typeof r?h(n):r)._mappings=[],t._highlightstart=parseInt(t.getAttribute("highlightstart")),t._highlightend=parseInt(t.getAttribute("highlightend")),t.pdbId=t.getAttribute("pdbId")?t.getAttribute("pdbId"):"",t.loadMolecule=t.loadMolecule.bind(h(t)),t.loadStructureTable=t.loadStructureTable.bind(h(t)),t._planHighlight=t._planHighlight.bind(h(t)),t}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,d(HTMLElement)),n=e,r=[{key:"connectedCallback",value:function(){var t=this;this.titleContainer=document.createElement("h4");var e=document.createElement("div");e.className="main-container",this.titleContainer.id="litemol-title",this.tableDiv=document.createElement("div"),this.tableDiv.className="table-container";var n=document.createElement("div");n.className="litemol-container",n.id="app",this.messageContainer=document.createElement("span"),this.appendChild(this.titleContainer),this.appendChild(this.messageContainer),this.appendChild(e),e.appendChild(n),e.appendChild(this.tableDiv),this.loadLiteMol(),this.loadUniProtEntry().then(function(e){t._pdbEntries=e.dbReferences.filter(function(t){return"PDB"===t.type}).map(function(e){return{id:e.id,properties:{method:t.formatMethod(e.properties.method),chains:t.getChains(e.properties.chains),resolution:t.formatAngstrom(e.properties.resolution)}}}),t._pdbEntries.length<=0?t.style.display="none":(t.loadStructureTable(),t.selectMolecule(t._pdbEntries.filter(function(t){return"Model"!==t.properties.method})[0].id))})}},{key:"attributeChangedCallback",value:function(t,e,n){if(e!==n){var r=parseFloat(n);this["_".concat(t)]=isNaN(r)?n:r,"molecule"===t&&this.selectMolecule(n),this._planHighlight(!0)}}},{key:"_planHighlight",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._plannedRender||(this._plannedRender=!0,requestAnimationFrame(function(){t._plannedRender=!1,t._selectedMolecule&&(e?t._selectMoleculeWithinRange(t._highlightstart,t._highlightend).then(function(){return t.highlightChain()}):t.highlightChain())}))}},{key:"loadUniProtEntry",value:function(){var t=l(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.ebi.ac.uk/proteins/api/proteins/".concat(this.accession));case 3:return t.next=5,t.sent.json();case 5:return t.abrupt("return",t.sent);case 8:throw t.prev=8,t.t0=t.catch(0),this.addMessage("Couldn't load UniProt entry"),new Error(t.t0);case 12:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}()},{key:"loadPDBEntry",value:function(){var t=l(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.ebi.ac.uk/pdbe/api/mappings/uniprot/".concat(e));case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(0),this.addMessage("Couldn't load PDB entry"),new Error(t.t0);case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},{key:"loadStructureTable",value:function(){var t=this,e="\n            <table>\n                <thead>\n                    <th>PDB Entry</th>\n                    <th>Method</th>\n                    <th>Resolution</th>\n                    <th>Chain</th>\n                    <th>Positions</th>\n                    <th>Links</th>\n                </thead>\n                <tbody>\n                    ".concat(this._pdbEntries.map(function(t){return'\n                        <tr id="entry_'.concat(t.id,'" class="').concat("Model"===t.properties.method?"pdb-row":"pdb-row-clickable",'" title="').concat("Model"===t.properties.method?"No structure available for this model":"",'">\n                            <td>\n                            <strong>').concat(t.id,'</strong><br/>\n                            </td>\n                            <td title="').concat(t.properties.method,'">').concat(t.properties.method,"</td>\n                            <td>").concat(t.properties.resolution,"</td>\n                            <td>").concat(t.properties.chains.map(function(t){return'<div title="'.concat(t.chains,'">').concat(t.chain,"</div>")}).join(""),"</td>\n                            <td>").concat(t.properties.chains.map(function(t){return"<div>".concat(t.start,"-").concat(t.end,"</div>")}).join(""),'</td>\n                            <td>\n                                <a target="_blank" title="Protein Data Bank Europe" href="//www.ebi.ac.uk/pdbe/entry/pdb/').concat(t.id,'">PDBe</a><br> \n                                <a target="_blank" title="Protein Data Bank RCSB" href="//www.rcsb.org/pdb/explore/explore.do?pdbId=').concat(t.id,'">RCSB PDB</a><br>\n                                <a target="_blank" title="Protein Data Bank Japan" href="//pdbj.org/mine/summary/').concat(t.id,'">PDBj</a><br>\n                                <a target="_blank" href="//www.ebi.ac.uk/thornton-srv/databases/cgi-bin/pdbsum/GetPage.pl?pdbcode=').concat(t.id,'">PDBsum</a>\n                            </td>\n                        </tr>\n                    ')}).join(""),"\n                </tbody>\n            </table>\n        ");this.tableDiv.innerHTML=e,this.querySelectorAll(".pdb-row-clickable").forEach(function(e){return e.addEventListener("click",function(){return t.selectMolecule(e.id.replace("entry_",""))})})}},{key:"getChains",value:function(t){return t.split(",").map(function(t){var e=t.trim().split("=");return{chain:e[0],start:e[1].split("-")[0],end:e[1].split("-")[1]}})}},{key:"formatMethod",value:function(t){switch(t){case"EM":return"Electron microscopy";default:return t}}},{key:"selectMolecule",value:function(){var t=l(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadPDBEntry(e);case 2:return n=t.sent,r=this.processMapping(n),this.querySelectorAll(".active").forEach(function(t){return t.classList.remove("active")}),this.querySelector("#entry_".concat(e)).classList.add("active"),t.next=8,this.loadMolecule(e);case 8:this._selectedMolecule={id:e,mappings:r},this._planHighlight();case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"loadLiteMol",value:function(){var t=a.a.Plugin;this.Command=a.a.Bootstrap.Command,this.Query=a.a.Core.Structure.Query,this.Bootstrap=a.a.Bootstrap,this.Core=a.a.Core,this.Tree=this.Bootstrap.Tree,this.CoreVis=a.a.Visualization,this.Transformer=this.Bootstrap.Entity.Transformer,this.Visualization=this.Bootstrap.Visualization,this.Event=this.Bootstrap.Event,this.Context=t.Components.Context,this._liteMol=t.create({target:"#app",viewportBackground:"#fff",layoutState:{hideControls:!0},allowAnalytics:!1}),this._liteMol.context.highlight.addProvider(function(t){})}},{key:"loadMolecule",value:function(t){this._liteMol.clear();var e=this._liteMol.createTransform();return e.add(this._liteMol.root,this.Transformer.Data.Download,{url:"https://www.ebi.ac.uk/pdbe/coordinates/".concat(t.toLowerCase(),"/full?encoding=BCIF"),type:"Binary",_id:t}).then(this.Transformer.Data.ParseBinaryCif,{id:t},{isBinding:!0,ref:"cifDict"}).then(this.Transformer.Molecule.CreateFromMmCif,{blockIndex:0},{isBinding:!0}).then(this.Transformer.Molecule.CreateModel,{modelIndex:0},{isBinding:!1,ref:"model"}).then(this.Transformer.Molecule.CreateMacromoleculeVisual,{polymer:!0,polymerRef:"polymer-visual",het:!0,water:!0}),this._liteMol.applyTransform(e)}},{key:"getTheme",value:function(){var t=new Map;return t.set("Uniform",this.CoreVis.Color.fromRgb(207,178,178)),t.set("Selection",this.CoreVis.Color.fromRgb(255,255,0)),t.set("Highlight",this.CoreVis.Theme.Default.HighlightColor),this.Visualization.Molecule.uniformThemeProvider(void 0,{colors:t})}},{key:"addMessage",value:function(t){this.removeMessage(),this._liteMol.command(this.Bootstrap.Command.Toast.Show,{key:"UPMessage",message:t,timeoutMs:3e4})}},{key:"removeMessage",value:function(){this._liteMol.command(this.Bootstrap.Command.Toast.Hide,{key:"UPMessage"})}},{key:"processMapping",value:function(t){if(Object.values(t)[0].UniProt[this.accession])return Object.values(t)[0].UniProt[this.accession].mappings}},{key:"translatePositions",value:function(t,e){if("string"!=typeof this._highlightend&&"string"!=typeof this._highlightstart){var n=!0,r=!1,i=void 0;try{for(var o,a=this._selectedMolecule.mappings[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(s.unp_end-s.unp_start==s.end.residue_number-s.start.residue_number){if(t>=s.unp_start&&e<=s.unp_end){var c=s.unp_start-s.start.residue_number;return{entity:s.entity_id,chain:s.chain_id,start:t-c,end:e-c}}this.addMessage("Positions ".concat(this._highlightstart,"-").concat(this._highlightend," not found in this structure"))}else this.addMessage("Mismatch between protein sequence and structure residues")}}catch(t){r=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}}},{key:"highlightChain",value:function(){var t=this;if(this._highlightstart&&this._highlightend){this.Command.Visual.ResetTheme.dispatch(this._liteMol.context,void 0),this.Command.Tree.RemoveNode.dispatch(this._liteMol.context,"sequence-selection");var e=this._liteMol.context.select("polymer-visual")[0];if(e){var n=this.translatePositions(this._highlightstart,this._highlightend);if(n){var r=null;r=this.isResidueOnlyHighlight?this.Query.residues({entityId:n.entity.toString(),seqNumber:n.start},{entityId:n.entity.toString(),seqNumber:n.end}):this.Query.sequence(n.entity.toString(),n.chain,{seqNumber:n.start},{seqNumber:n.end});var i=this.getTheme(),o=this._liteMol.createTransform().add(e,this.Transformer.Molecule.CreateSelectionFromQuery,{query:r,name:"My name"},{ref:"sequence-selection"});this._liteMol.applyTransform(o).then(function(){t.Command.Visual.UpdateBasicTheme.dispatch(t._liteMol.context,{visual:e,theme:i})}),this.removeMessage()}}}}},{key:"_selectMoleculeWithinRange",value:function(){var t=l(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this._pdbEntries){t.next=2;break}return t.abrupt("return");case 2:if(r=this._pdbEntries.filter(function(t){return"Model"!==t.properties.method&&t.properties.chains.filter(function(t){return t.start<=e&&t.end>=n}).length>0}),!this._selectedMolecule){t.next=6;break}if(!(this._selectedMolecule.mappings.filter(function(t){return t.unp_start<=e&&t.unp_end>=n}).length>0)){t.next=6;break}return t.abrupt("return");case 6:if(!(r&&r.length>0)){t.next=9;break}return t.next=9,this.selectMolecule(r[0].id);case 9:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"formatAngstrom",value:function(t){return t?t.replace("A","&#8491;"):""}},{key:"accession",get:function(){return this.getAttribute("accession")},set:function(t){return this.setAttribute("accession",t)}},{key:"isManaged",get:function(){return!0}},{key:"isResidueOnlyHighlight",get:function(){return this.hasAttribute("highlightresidues")}}],i=[{key:"observedAttributes",get:function(){return["highlightstart","highlightend","molecule","highlightresidues"]}}],r&&u(n.prototype,r),i&&u(n,i),e}(),y=n(365);e.default=function(t){return Object(y.a)("protvista-structure",g),i.a.createElement(r.Fragment,null,i.a.createElement("protvista-structure",{accession:"P06493",highlightstart:"290",highlightend:"310"}))}},365:function(t,e,n){"use strict";e.a=function(t,e){window.customElements.get(t)||window.customElements.define(t,e)}}}]);