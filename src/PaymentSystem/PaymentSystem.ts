import conf from '../../conf.json';
import axios, { AxiosResponse } from 'axios';
import {
    InvalidAssetType,
    InvalidCountryType,
    RequestFailedResponseType, RequestParamTypes,
    ValidAssetsType,
    ValidCountryType,
} from './PaymentSystem.interface';

class PaymentSystem {
    private readonly baseUrl;
    public readonly invalidCountries: InvalidCountryType[] = ['JKSS', 'KWT', 'SS', 'SLMK'];
    public readonly invalidAssets: InvalidAssetType[] = ['SFMKD', 'SDSGC', 'SDMNC', 'OFNWK'];
    public readonly validAssets: ValidAssetsType[] = [
        'ATBRL',
        'ATCLP',
        'ATKZT',
        'ATPEN',
        'ATUAH',
        'ATUSD',
        'ATVND',
        'ATXOF',
        'PURPLE',
    ];
    public readonly validCountries: ValidCountryType[] = [
        'BRA',
        'WWC',
        'CHL',
        'PER',
        'UKR',
        'RUS',
        'SEN',
        'VNM',
        'MYS',
        'IDN',
        'IND',
        'THA',
        'PHL',
    ];
    public readonly expectedResultOnInvalidData: RequestFailedResponseType = {
        receive: {},
    };

    constructor() {
        this.baseUrl = conf.baseApiUrl;
    }

    public async getPaymentSystems({
        countries = '',
        asset = '',
    }: RequestParamTypes): Promise<AxiosResponse<any, any>> {
        let url = `${this.baseUrl}/payments/edeab824-178e-4fd7-9bf0-bd88a6fd114a/sep0031/info`;
        let params: RequestParamTypes = {
            countries,
            asset,
        };
        return await axios.get(url, {
            params,
        });
    }
}

export default new PaymentSystem();


