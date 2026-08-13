import pandas as pd
import matplotlib.pyplot as plt

def analyze_excel_trend(file_path, date_column, value_column, output_chart='trend.png'):
    """
    Analyzes a time-series trend from an Excel file and saves a line chart.

    Parameters:
        file_path (str): Path to the Excel file.
        date_column (str): Name of the column containing dates.
        value_column (str): Name of the column containing the metric to plot.
        output_chart (str): Output file name for the chart.

    Returns:
        pd.DataFrame: Cleaned data and computed trend stats.
    """
    # Read the Excel file
    df = pd.read_excel(file_path)

    # Ensure date column is datetime and sort
    df[date_column] = pd.to_datetime(df[date_column])
    df = df.sort_values(date_column).reset_index(drop=True)

    # Basic stats
    print('Trend Analysis Summary')
    print('----------------------')
    print(f'Start date: {df[date_column].min()}  End date: {df[date_column].max()}')
    print(f'Data points: {len(df)}')
    print(f'Overall change: {df[value_column].iloc[-1] - df[value_column].iloc[0]:.2f}')

    # Plot
    plt.figure(figsize=(10, 5))
    plt.plot(df[date_column], df[value_column], marker='o', linestyle='-')
    plt.title('Trend Analysis')
    plt.xlabel('Date')
    plt.ylabel(value_column)
    plt.grid(True, alpha=0.3)
    plt.tight_layout()
    plt.savefig(output_chart, dpi=150)
    plt.close()

    return df

# Example usage:
# analyze_excel_trend('sales_data.xlsx', 'Date', 'Revenue', 'revenue_trend.png')