# Mooli

## Goal

Allow users to easily create smart contracts on Ethereum blockchain. 

---

### Details



### Stages



### To Do

- [x] Pick one generic use case where smart contract can be generated for any of the audience above
- [x] Derive one specific use-case from generic (also solves audience)
- [x] Map use case into a decision tree of branches and input params
- [ ] Configure site
- [ ] Code workflow into a form
- [ ] Deploy online
- [ ] Validate the need

### Generic Use case

Generic use-case example: 
- A and B wants to enter an agreement.
- B will get paid 'x' amount if condition 'c' is met

What kind of conditions?
..

A contract can be self-executing or may require human intervention.

Human intervention / Decision delegation can be configured to A / B (based on initial agreement)
or
new intermediate parties can be invited:
P... P(n)

Only binary contracts for now, where at the end of expiry the condition (C) is either true / false. A term for a contract can be infinity.

### Specific use-case (MVP) (WIP)

Agencies / Companies hire freelancers all the time. Both of the parties may or may not have exchanged value in past, but need to. Trustless smart-contracts can be formed between freelancer and an agency, on per-sprint basis, or even having an intermediate party (which they both trust) to execute the transaction. This can even later be done by external oracle in [some cases](https://blog.chain.link/44-ways-to-enhance-your-smart-contract-with-chainlink/#).

Workflow In short:

- Agency / Freelancer creates the smart contract with some fixed amount (USDC/ETH)

- They configure parameters like: from, to, amount, contract_exec_condition (approval-based/time-based/code-based*)

- Approver can be agency / freelancer or 3rd party based on their internal negotitation.

- Once the creator is done configuring smart contract, other party reviews and approves the parameters.


### Alternatives

If anyone finds a new alternative, please link it here:

https://unibright.io/