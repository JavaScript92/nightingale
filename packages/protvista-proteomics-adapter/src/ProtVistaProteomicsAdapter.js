/*jslint node: true */
"use strict";

import ProtVistaUniProtEntryAdapter from 'protvista-uniprot-entry-adapter';
import ProteomicsDataParser from './ProteomicsDataParser';

export default class ProtVistaProteomicsAdapter extends ProtVistaUniProtEntryAdapter {
    constructor() {
        super();
        this._parser = new ProteomicsDataParser();
    }

    parseEntry(data) {
        this._adaptedData = [];
        if (data && (data.length !== 0)) {
            this._adaptedData = this._parser.parseEntry(data);
            this._adaptedData.map(feature => feature.tooltipContent = this._basicHelper.formatTooltip(feature));
            this._adaptedData = this._basicHelper.renameProperties(this._adaptedData);
        }
        return this._adaptedData;
    }
}