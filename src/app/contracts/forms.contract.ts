export namespace FormsContract {
    export abstract class Base {
    }

    export abstract class Donation extends Base {
        public static readonly AMOUNT = 'amount';
        public static readonly DESCRIPTION = 'description';
    }

    export abstract class Subscription extends Base {
        public static readonly PLAN = 'plan';
    }
}
