export type RequestParamTypes = { countries?: CountryTypes; asset?: AssetTypes };
export type RequestFailedResponseType = {
    receive: {};
};

export type ValidAssetsType =
    | 'ATBRL'
    | 'ATCLP'
    | 'ATKZT'
    | 'ATPEN'
    | 'ATUAH'
    | 'ATUSD'
    | 'ATVND'
    | 'ATXOF'
    | 'PURPLE';

export type ValidCountryType =
    | 'BRA'
    | 'WWC'
    | 'CHL'
    | 'PER'
    | 'UKR'
    | 'RUS'
    | 'SEN'
    | 'VNM'
    | 'MYS'
    | 'IDN'
    | 'IND'
    | 'THA'
    | 'PHL';

export type InvalidCountryType = 'JKSS' | 'KWT' | 'SS' | 'SLMK'

export type InvalidAssetType = 'SFMKD' | 'SDSGC' | 'SDMNC' | 'OFNWK'

export type CountryTypes = ValidCountryType | InvalidCountryType | '';
export type AssetTypes = ValidAssetsType | InvalidAssetType | '';