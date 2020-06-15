class CreateRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :records do |t|
      t.integer :patient_id
      t.integer :clinic_id
      t.string :description

      t.timestamps
    end
  end
end
