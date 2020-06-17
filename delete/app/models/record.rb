class Record < ApplicationRecord
  belongs_to :patient
  belongs_to :clinic
end
