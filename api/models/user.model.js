import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    signature: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "USER"
    },
    avatar: {
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAACUCAMAAAAtU6zLAAAANlBMVEXk5ueutLfo6uursbXr7e7IzM6or7Lh4+S2u77Lz9He4OGyuLvY29y5vsHS1de8wcPCxsmiqa30MHCDAAAFNElEQVR4nO2d2ZbbIAxAjTCYzZj8/88WnHUyziQGYURO70vbPPkeCbEYq8NwBDCOMBjnE86s//oKAMBpxeVJXjhJroKLP7d+slJg8LOUnD3BT1L5oWe9GLFlQ+yiJ+Uc9Vo/Yx4A3r4Su+pZ3/op83hndrPrLnYxG9+ane1m1/pZdwGD5vITs9WOi6n1A+/ALB+bJXoKXRxpe9SiHOulpmj+0Uh7hEvdQ15OYmfQLqELE/l6manWg1y22irX+un/Jl8tybV++r8AXaAW5TTdrAS/u0A+yXmqcmBsoRtnjqgc7FuNbMrZ1hLbQEkduSIDxcCBQ1CLchSzElThYDvDLT038Chhi4ET5ORGlKitcq1VnimctR/hYWxt8xNAC1uUay3zE8SwkQsc4JklOUrVBBxiSkY3SmvmccZUY0xRSkrUsMXAmdZCN4r3Nr+gM39jpyRjlkxS4lbJBJ2kxK2SK1TOYkeBrsYWIkmJP9zoDDi8LcADraWuVFBjRN7suBpuNE7zQNsKboLEgKtRJqkUyjF8sdtSw22m4aZquCkStaSOG41jyv9u/93uEBlvFZbKZNy+eQ744rkbqqy5iJwt+xpuRI5fTQ03Gnsc1Hc4N4gcdI0V9m80pu46kwCVNwJQoZiQOTSf8AcckaOgKgOOStiGUWAHjsaqJAEG+/0bkdktAchJSemFN3JSEruogHgFgzFJZFFyBnf6pvIS54JBDBy1a4aohya0whbXJicsM0lmTXJlnLFKJbHRtoIUuBPBrztGnKt4ks5y64ERQ41Jimo45eREatq+g3BBVNJ4FbwBFNdKKsckG5Re7CJ2U/knU5EarTXyL0p2qfQWJE/kX6ShtNneBjzLCh2nckr+Jy7vgIHYxmYbMBkvUhX1sXYBprAvLzlbaFfIB2DQe7aqXOmeepiAWz4NXQxaF0PtTuqB9IkdZ3NXQTsDk3hrF82E6c5sSL2QjF7s634fnNtZm177WAFMXsybevG3OfhuzRIQg+dFmK2U8qzIefyrVYvwruveYytRb3JeixCWlRCE9s70L3YBkqBxK2YavqAX3g3YoPUzFXJ2SPHy3mutRSL+qVOnxhi/Th0Bxvsom5WyP/YG1lo1X0ae6SpD46Mar8MyzyqVxcTGFHD+PTmGWDKnDgTjEzoftZTdMtqewVfDoP1EWS/NZSFqsd29x6KgtdHP0VxawhhXWDleD4Ipfn4gdvoK46TXgOV63fRinUm9YFsL3QDwiy1tg3T3i8NPGBKdfGMuilQPkcyuekv74KVutZhWDyjdtD9eTMYq3z1csKJZ2YwxQ3vH/dquRdWEsbrZSoPYgVnyZ7I9cOuPrSowiGPMVjvljpsRYPQM9W7aOzkZjkpMGMKRZgnJ/BGhi3X/87bQiHZL/dkOpsODdpGztd/0gFFt1NKoqzsdxHw8rDz+pm5eYnTPLJGztV7TNRtqd7is02un4VB7oEonXzB7m8vXQWp8NYe2sS4EvVyCw91Zl3DClQPTsvY/cxKIO4Pyhte4ILa7hQmnvTAeaNUShkM22LvA+vQDmk/ZG3CU6w2obWrR4AphbYncyhUNvhS7wUCrRN4pv0oKgagaY7ZwyNX4LB2L4qys0eoOjaI+IID+4TYqtuCTq7jWav34f1PwH2DU6XKESH45gcwb4weS/SE4+bDFwGWuK8mPtkRm4Or03cKFq7xTPXK7tk2ytqngO0hJxuecsAH9SpLIqiami5TMmr/rdE3GJycpe6iSCZ7zBRa9A6Bt7P7dAJkz8ne8bsDzD+jUTsU43iKbAAAAAElFTkSuQmCC"
    },
  }, 
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;