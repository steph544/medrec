class CreateClinics < ActiveRecord::Migration[6.0]
  def change
    create_table :clinics do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :phone
      t.string :fax

      t.timestamps
    end
  end
end
