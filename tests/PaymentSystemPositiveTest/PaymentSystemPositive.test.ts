import Common from '../../src/Common/Common';
import PaymentSystem from '../../src/PaymentSystem/PaymentSystem';

describe('Verify the correctness of the API response with correct parameters', () => {
    it('Verify API with "ATUSD" asset and "WWC" countries', async () => {
        const paymentResponse = await PaymentSystem.getPaymentSystems({
            countries: 'WWC',
            asset: 'ATUSD',
        });

        Common.verifyStatusCode(paymentResponse.status, 200);
        Common.verifyAllProperties(paymentResponse.data.receive,
            'ATUSD',
        );
        Common.verifyPropertiesNotExist(paymentResponse.data.receive, ['ATUAH',
            'ATBRL',
            'PURPLE'])
        Common.verifyValue(paymentResponse.data.receive, 'WWC')
    });

    it('Verify API response with "ATUAH" asset and "RU" country', async () => {
        const paymentResponse = await PaymentSystem.getPaymentSystems({
            countries: 'RUS',
            asset: 'ATUAH',
        });

        Common.verifyStatusCode(paymentResponse.status, 200);
        Common.verifyAllProperties(paymentResponse.data.receive, 'ATUAH');
        Common.verifyPropertiesNotExist(paymentResponse.data.receive, ['ATUSD',
            'ATBRL',
            'PURPLE'])
        Common.verifyValue(paymentResponse.data.receive, 'WWC')
    });

    it('Verify API response with "ATBRL" asset and "WWC" countries', async () => {
        const paymentResponse = await PaymentSystem.getPaymentSystems({
            countries: 'WWC',
            asset: 'ATBRL',
        });

        Common.verifyStatusCode(paymentResponse.status, 200);
        Common.verifyAllProperties(paymentResponse.data.receive, 'ATBRL');
        Common.verifyPropertiesNotExist(paymentResponse.data.receive, ['ATUSD',
            'ATUAH',
            'PURPLE'])
        Common.verifyValue(paymentResponse.data.receive, 'WWC')
    });

    it('Verify API response with "PURPLE" asset and "WWC" countries', async () => {
        const paymentResponse = await PaymentSystem.getPaymentSystems({
            countries: 'WWC',
            asset: 'PURPLE',
        });

        Common.verifyStatusCode(paymentResponse.status, 200);
        Common.verifyAllProperties(paymentResponse.data.receive, 'PURPLE');
        Common.verifyPropertiesNotExist(paymentResponse.data.receive, ['ATUSD', 'ATUAH', 'ATBRL']);
        Common.verifyValue(paymentResponse.data.receive, 'WWC')
    });
});
