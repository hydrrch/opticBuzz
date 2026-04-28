# Opti Buzz - Premium Eyewear

## Project Structure

- `src/components/`: Reusable UI components.
  - `ui/`: Base components (buttons, inputs, cards).
  - `shop/`: Ecommerce specific (product cards, filters).
  - `ar/`: Virtual try-on components.
- `src/hooks/`: Custom React hooks.
- `src/lib/`: Third-party library initializations (Firebase, MediaPipe).
- `src/pages/`: Main route views.
- `src/services/`: API and Firebase service logic.
- `src/store/`: Zustand state management.
- `src/types/`: TypeScript definitions.
- `src/utils/`: Helper functions.

## Implementation Roadmap

1. **Phase 1: Foundation**
   - Firebase initialization (Auth, Firestore, Storage).
   - Routing setup.
   - Global state (Auth, Cart, Logic).
2. **Phase 2: Product Catalog**
   - Firestore schema definition.
   - Product listing and filtering.
   - Product detail page.
3. **Phase 3: Checkout & Localization**
   - Multi-step checkout.
   - Localized Pakistani forms (City/Province selection).
   - Prescription upload logic.
4. **Phase 4: AR Virtual Try-On**
   - MediaPipe integration.
   - Overlay logic for frames.
5. **Phase 5: Admin & Dashboard**
   - Analytics and inventory management.
   - Order processing.
