# Security Specification for Opti Buzz

## Data Invariants
1. **Users**: A user can only access their own private data and created prescriptions/orders.
2. **Products**: Publicly readable. Admins can manage products.
3. **Prescriptions**: Tied to a userId. Must be verified by an admin.
4. **Orders**: Immutable once placed (except for status updates by admins).

## The Dirty Dozen Payloads (Rejection Targets)
1. **Identity Spoofing**: Creating an order where `userId` is not the sender's UID.
2. **Privilege Escalation**: Attempting to update a user document to set `role: "admin"`.
3. **Shadow Update**: Updating a product price with an extra `isVerified: true` field to bypass some hypothetical check.
4. **ID Poisoning**: Creating a prescription with a 2MB string as the document ID.
5. **PII Leak**: A signed-in user trying to `get` someone else's profile.
6. **State Shortcutting**: Updating an order status from "pending" directly to "delivered" by a customer.
7. **Resource Exhaustion**: Sending a 1MB string in a product `name` field.
8. **Relational Break**: Creating an order for a `productId` that doesn't exist.
9. **Timestamp Spoofing**: Providing a `createdAt` date from 2005.
10. **Query Scrape**: An authenticated user listing all orders without a `where userId == self` filter.
11. **Negative Price**: Creating a product with `price: -100`.
12. **Admin Lockdown**: Deleting the `admins` collection document (if applicable).

## Test Runner Logic
I will implement `firestore.rules.test.ts` (draft) to ensure these are blocked.
