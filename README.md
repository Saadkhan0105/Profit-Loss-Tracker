# Profit & Loss Tracker

This is a React-based web application to track profit and loss on stock investments. The application provides features to add, filter, and delete entries and calculates the total profit/loss and remaining investment. Data is persisted in the browser's `localStorage` to ensure it remains available after a page reload.

## Features

- **Add Entries**: Add new records with date, stock name, and profit/loss.
- **View and Filter Entries**:
  - Filter records by month and year.
  - View a table displaying the entered records along with total profit/loss and remaining investment.
- **Delete Entries**: Remove any entry from the list.
- **Persistent Storage**: Data is stored in the browser's `localStorage` and automatically reloaded on page refresh.

## Components

1. **App.js**: The main component that manages the state and combines all other components.
2. **AddEntryForm.js**: Handles the form for adding new entries.
3. **Dropdown.js**: A reusable dropdown component for selecting months and years.
4. **Table.js**: Displays the entries in a tabular format with calculated totals.

## Technologies Used

- React (with Hooks)
- CSS for basic styling
- `localStorage` for data persistence

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/profit-loss-tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd profit-loss-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Usage

1. **Add Entries**:
   - Fill in the `Date`, `Stock Name`, and `Profit/Loss` fields.
   - Click the "Add Entry" button to add the record to the table.

2. **Filter Records**:
   - Use the "Select Month" and "Select Year" dropdowns to filter entries by specific time periods.

3. **View Totals**:
   - See the calculated total profit/loss and remaining investment below the table.

4. **Delete Entries**:
   - Click the "Delete" button on any row to remove that entry.

## Folder Structure

```
profit-loss-tracker/
├── public/
├── src/
│   ├── components/
│   │   ├── AddEntryForm.js
│   │   ├── Dropdown.js
│   │   ├── Table.js
│   ├── App.js
│   ├── index.js
├── package.json
```

## Screenshots

### Main Screen
![Main Screen](https://via.placeholder.com/800x400.png?text=Main+Screen)

### Add Entry Form
![Add Entry Form](https://via.placeholder.com/800x400.png?text=Add+Entry+Form)

### Filtered View
![Filtered View](https://via.placeholder.com/800x400.png?text=Filtered+View)

## Future Improvements

- Add authentication for multiple users.
- Export data as CSV or Excel.
- Add charts to visualize profit/loss trends.
- Implement a backend for centralized storage.

## License

This project is licensed under the MIT License. See the LICENSE file for details.