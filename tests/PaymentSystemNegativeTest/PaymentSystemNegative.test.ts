import Common from '../../src/Common/Common';
import PaymentSystem from '../../src/PaymentSystem/PaymentSystem';

describe('Verify the correctness of the API with invalid parameters', () => {
    const expectedResult = PaymentSystem.expectedResultOnInvalidData;

    for (const invalidCountry of PaymentSystem.invalidCountries) {
        it('Verify API with invalid countries', async () => {
            const { data: paymentResponse } = await PaymentSystem.getPaymentSystems({
                countries: invalidCountry,
            });

            Common.verifyJson(paymentResponse, expectedResult);
        });
    }

    for (const invalidAsset of PaymentSystem.invalidAssets) {
        it('Verify API with invalid assets', async () => {
            const { data: paymentResponse } = await PaymentSystem.getPaymentSystems({
                asset: invalidAsset,
            });

            Common.verifyJson(paymentResponse, expectedResult);
        });
    }
});
