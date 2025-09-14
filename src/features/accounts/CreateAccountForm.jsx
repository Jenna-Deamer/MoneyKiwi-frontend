import { useState } from "react";
import { useCreateAccount } from "./useCreateAccount";

function CreateAccountForm({ closeModal }) {  // Accept closeModal as a prop
    const [name, setName] = useState("");
    const [accountType, setAccountType] = useState("chequing");
    const [institution, setInstitution] = useState("");
    const [registrationType, setRegistrationType] = useState("Non-reg");
    const [description, setDescription] = useState("");
    const [currency, setCurrency] = useState("CAD");

    const { mutate: createAccount, isLoading, isError, error } = useCreateAccount();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ name, accountType, institution, registrationType, description, currency });
        createAccount(
            { name, accountType, institution, registrationType, description, currency },
            {
                onSuccess: () => {
                    // Reset form fields on success
                    setName("");
                    setAccountType("chequing");
                    setInstitution("");
                    setRegistrationType("Non-reg");
                    setDescription("");
                    setCurrency("CAD");
                    // Close modal on success
                    closeModal();
                }
            }
        );
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    return (
        <div className="p-4">
            <h1 className="text-center mb-8 text-xl font-bold">Create Financial Account</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name">Account Name:</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            maxLength={50}
                            placeholder="Primary Chequing"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="accountType">Account Type:</label>
                        <select className="cursor-pointer w-full" id="accountType" value={accountType} onChange={(e) => setAccountType(e.target.value)} required>
                            <option value="chequing">Chequing</option>
                            <option value="savings">Savings</option>
                            <option value="credit">Credit</option>
                            <option value="investment">Investment</option>
                            <option value="cash">Cash</option>
                        </select>
                    </div>
                </fieldset>

                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="institution">Institution</label>
                        <input
                            id="institution"
                            type="text"
                            name="institution"
                            placeholder="Name of institution"
                            maxLength={100}
                            required
                            value={institution}
                            onChange={(e) => setInstitution(e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="registrationType">Registration Type</label>
                        <select className="cursor-pointer w-full" id="registrationType" value={registrationType} onChange={(e) => setRegistrationType(e.target.value)} required>
                            <option value="Non-reg">None-Registered</option>
                            <option value="tfsa">TFSA</option>
                            <option value="rrsp">RRSP</option>
                            <option value="fsha">FSHA</option>
                        </select>
                    </div>
                </fieldset>

                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Optional description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            maxLength={255}
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="currency" className="me-2">Currency:</label>
                        <select className="cursor-pointer w-full" id="currency" required value={currency} onChange={(e) => setCurrency(e.target.value)}>
                            <option value="CAD">CAD</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>
                </fieldset>

                <div className="flex justify-center mt-4">
                    <button type="submit" className="cursor-pointer">Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default CreateAccountForm;